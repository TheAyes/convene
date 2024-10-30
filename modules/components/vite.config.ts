import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-expect-error Required as typescript doesn't want to resolve the package json
import pkg from "./package.json";

/* eslint-disable @typescript-eslint/no-explicit-any */
const { dependencies = {}, peerDependencies = {} } = pkg;
const makeRegex = (dep: any) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj: any) => Object.keys(obj).map(makeRegex);

export default defineConfig(() => {
	return {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
					devDependencies: "sass-embedded",
					silenceDeprecations: ["legacy-js-api"]
				},
				sass: {
					api: "modern-compiler",
					devDependencies: "sass-embedded",
					silenceDeprecations: ["legacy-js-api"]
				}
			}
		},
		build: {
			target: "es2020",
			lib: {
				entry: "./src/index.ts",
				formats: ["es", "cjs"],
				fileName: (format, entryName) => `${entryName}.qwik.${format === "es" ? "mjs" : "cjs"}`
			},
			rollupOptions: {
				output: {
					preserveModules: true,
					preserveModulesRoot: "src"
				},
				// externalize deps that shouldn't be bundled into the library
				external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)]
			}
		},
		plugins: [qwikVite(), tsconfigPaths()]
	};
});
