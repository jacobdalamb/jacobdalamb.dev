import { join } from "path";
import { readFile, writeFile } from "fs/promises";

async function updateBiomeJsonVersion() {
	try {
		// Define the paths for package.json and biome.json
		const packageJsonPath = join(__dirname, "package.json");
		const biomeJsonPath = join(__dirname, "biome.json");

		// Read package.json
		const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

		// Extract the version of @biomejs/biome
		let biomeVersion = packageJson.devDependencies["@biomejs/biome"];

		// Use regex to remove any non-digit characters at the start of the version string
		biomeVersion = biomeVersion.replace(/^\D*/, "");

		// Read biome.json
		const biomeJson = JSON.parse(await readFile(biomeJsonPath, "utf8"));

		// Update the $schema version
		biomeJson.$schema = `https://biomejs.dev/schemas/${biomeVersion}/schema.json`;

		// Write the updated content back to biome.json
		await writeFile(biomeJsonPath, JSON.stringify(biomeJson, null, 2), "utf8");

		console.log(`biome.json version updated successfully to ${biomeVersion}.`);
	} catch (error) {
		console.error("Error updating biome.json:", error);
	}
}

updateBiomeJsonVersion();
