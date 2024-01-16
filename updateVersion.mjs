#!/usr/bin/env zx

const current_date = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

const { version } = await fs.readJson("./package.json");
const newVersion = version.replace(/(\d{4}\.\d{2}\.\d{2})/, current_date);

await $`sed -i '' 's/${version}/${newVersion}/g' package.json`;
