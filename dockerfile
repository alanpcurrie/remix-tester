# Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Enable corepack for pnpm support
RUN corepack enable

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Enable corepack for pnpm support
RUN corepack enable

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S remixuser -u 1001

# Copy built assets and necessary files from the build stage
COPY --from=build --chown=remixuser:nodejs /app/build ./build
COPY --from=build --chown=remixuser:nodejs /app/public ./public
COPY --from=build --chown=remixuser:nodejs /app/package.json ./package.json
COPY --from=build --chown=remixuser:nodejs /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Switch to non-root user
USER remixuser

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]