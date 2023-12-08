import { Octokit } from "octokit";
const gistToken = import.meta.env.SECRET_GIST_TOKEN;
const installedAppsGistId = "57a442c95e868894e657202d2feb2a8f";

const octokit = new Octokit({
	auth: gistToken,
});

export async function getGistData() {
	try {
		if (installedAppsGistId) {
			const gist_id = installedAppsGistId;
			const response = await octokit.request("GET /gists/{gist_id}", {
				gist_id,
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
			});
			return response.data;
		}
		throw new Error("Gist ID is undefined");
	} catch (error) {
		console.error("Failed to get Gist data:", error);
		return null;
	}
}
