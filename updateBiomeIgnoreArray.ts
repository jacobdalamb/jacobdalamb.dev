import { join } from "path";
import { readFile, writeFile } from "fs/promises";

async function updateBiomeIgnore() {
	try {
		// Define the paths for .gitignore and biome.json
		const gitignorePath = join(__dirname, ".gitignore");
		const biomeJsonPath = join(__dirname, "biome.json");

		// Read .gitignore
		const gitignoreContent = await readFile(gitignorePath, "utf8");

		// Convert the content of .gitignore to an array of patterns
		const ignorePatterns = gitignoreContent
			.split(/\r?\n/)
			.filter((line) => line && !line.startsWith("#"));

		// Add additional files to ignore
		ignorePatterns.push("pnpm-lock.yaml", "bun.lockb");

		// Read biome.json
		const biomeJson = JSON.parse(await readFile(biomeJsonPath, "utf8"));

		// Update the ignore array
		biomeJson.files.ignore = ignorePatterns;

		// Write the updated content back to biome.json
		await writeFile(biomeJsonPath, JSON.stringify(biomeJson, null, 2), "utf8");

		console.log("biome.json updated successfully with .gitignore patterns.");
	} catch (error) {
		console.error("Error updating biome.json:", error);
	}
}

updateBiomeIgnore();
