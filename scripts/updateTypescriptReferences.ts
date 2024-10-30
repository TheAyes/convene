import { Glob } from "bun";
import * as process from "node:process";

const PACKAGEJSONPATH = "../package.json";

const configPath = PACKAGEJSONPATH.replace("package.json", "");
process.chdir(configPath);

const packageJson = Bun.file("package.json");
if (!packageJson.exists()) {
	console.error(`the package json at ${configPath} does not exist`);
	process.exit(1);
}

const tsConfig = Bun.file("tsconfig.json");
if (!tsConfig.exists()) {
	console.error(`the typescript config at ${configPath} does not exist`);
	process.exit(1);
}

const packageData = (await packageJson.json()) as { workspaces: string[] };
const typescriptData = (await tsConfig.json()) as { references: { path: string }[] };
typescriptData.references = [];

for await (const workspace of packageData.workspaces) {
	const glob = new Glob(workspace + "/package.json");

	for await (const file of glob.scan(".")) {
		const filePath = file.replace("package.json", "").replaceAll("\\", "/");
		typescriptData.references.push({
			path: filePath
		});
	}
}

await Bun.write(tsConfig, JSON.stringify(typescriptData, null, "\t"));
