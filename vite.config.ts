import { vitePlugin as remix } from "@remix-run/dev";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		remix({
			routes(defineRoutes) {
				return defineRoutes((route) => {
					route("/", "domains/cars/routes/_index.tsx", { index: true });
					route("/design-system", "design-system/routes/_index.tsx", {
						index: true,
					});
				});
			},
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		tsconfigPaths(),
		vanillaExtractPlugin(),
		visualizer({ emitFile: true }),
	],
});
