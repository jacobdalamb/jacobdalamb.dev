import type { Endpoints } from "@octokit/types";
import { Octokit } from "octokit";
const gistToken = import.meta.env.SECRET_GIST_TOKEN;
const bookmarkGistSrc =
	'<script src="https://gist.github.com/jacobthesheep/39095a9115636a5818e39395825fc1ca.js"></script>';
const gistRegex = /https:\/\/gist\.github\.com\/[^\/]+\/([a-f0-9]+)\.js/;
const match = bookmarkGistSrc.match(gistRegex);
const gist_id = match ? match[1] : undefined;

type listGistsResponse = Endpoints["GET /gists/{gist_id}"]["response"];
let gistData: listGistsResponse["data"];

const octokit = new Octokit({
	auth: gistToken,
});

if (gist_id) {
	const response = await octokit.request("GET /gists/{gist_id}", {
		gist_id,
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});
	gistData = response.data;
}

export function getGistData() {
	return gistData;
}
