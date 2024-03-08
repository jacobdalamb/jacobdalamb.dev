import { hfs } from "@humanfs/node";
async function updateVersion() {
	const path = "./package.json";
	const content = await hfs.json(path);
	const current_date = new Date().toISOString().slice(0, 10).replace(/-/g, ".");
	const newVersion = content.version.replace(
		/(\d{4}\.\d{2}\.\d{2})/,
		current_date,
	);
	content.version = newVersion;
	await hfs.write(path, JSON.stringify(content, null, 2));
	console.log(`Updated version to ${newVersion}`);
}

updateVersion();
