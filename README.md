# Welcome to Remix Tester

![Remix](/repo.webp)

This project is a Remix application with additional tooling and dependencies for enhanced development experience.

- 📖 [Remix docs](https://remix.run/docs)

## Project Overview

- **Name**: remix-tester
- **Type**: Module
- **Package Manager**: pnpm@8.15.5
- **Node Version**: >=20.0.0

## Key Dependencies

- **Remix**: A full stack web framework
- **React**: A JavaScript library for building user interfaces
- **Radix UI**: A low-level UI component library
- **Vanilla Extract**: A zero-runtime Stylesheets-in-TypeScript library
- **XState**: A state management library for JavaScript and TypeScript

For a full list of dependencies, please refer to the `package.json` file.

## Development

To run the development server:

```sh
npm run dev
```

This will start the Remix development server using Vite.

### Additional Scripts

- **Linting**: `npm run lint` (or `npm run lint:fix` to automatically fix issues)
- **Type Checking**: `npm run typecheck`
- **Unit Testing**: `npm run test:unit`

## Building for Production

To build your app for production:

```sh
npm run build
```

This command uses Remix with Vite to build your application.

## Running in Production

To run the app in production mode:

```sh
npm start
```

This uses `remix-serve` to run your built application.

## Deployment

### DIY Deployment

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`:
- `build/server`
- `build/client`

### Choosing a Host

You'll need to pick a host to deploy your application. Remix is compatible with many hosting providers. Check the Remix documentation for specific deployment guides.

## Additional Tools

- **Biome**: Used for linting and formatting
- **Vitest**: Used for unit testing
- **TypeScript**: For static type checking
- **Vite**: Used as the build tool and development server

## Customisation

This project uses Vanilla Extract for styling. You can find and modify styles in `.css.ts` files throughout the project.

## Visualisation

This project includes `rollup-plugin-visualizer` for bundle analysis. After building your project, you can find a visualization of your bundle in the `stats.html` file.

## Contributing

Please ensure you run linting and tests before submitting any pull requests:

```sh
npm run lint
npm run typecheck
npm run test:unit
```


## Powered by

![Remix](https://img.shields.io/badge/remix-%23000.svg?style=for-the-badge&logo=remix&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)

[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

[Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)