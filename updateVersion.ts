import fse from "fs-extra/esm";
async function updateVersion() {
	const path = "./package.json";
	const content = await fse.readJson(path);
	const current_date = new Date().toISOString().slice(0, 10).replace(/-/g, ".");
	const newVersion = content.version.replace(
		/(\d{4}\.\d{2}\.\d{2})/,
		current_date,
	);
	content.version = newVersion;
	await fse.writeJson(path, content, { spaces: 2 });
}

updateVersion();
