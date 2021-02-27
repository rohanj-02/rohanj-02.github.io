import { Octokit } from "https://cdn.pika.dev/@octokit/core";
import GITHUB_AUTH_KEY from "../src/components/config.js";

const octokit = new Octokit({ auth: `${GITHUB_AUTH_KEY}` });

const stats = {
	day: {
		py: { additions: 0, deletions: 0 },
		js: { additions: 0, deletions: 0 },
		java: { additions: 0, deletions: 0 },
		c: { additions: 0, deletions: 0 },
		html: { additions: 0, deletions: 0 },
		css: { additions: 0, deletions: 0 },
		assembly: { additions: 0, deletions: 0 },
	},
	week: {
		py: { additions: 0, deletions: 0 },
		js: { additions: 0, deletions: 0 },
		java: { additions: 0, deletions: 0 },
		c: { additions: 0, deletions: 0 },
		html: { additions: 0, deletions: 0 },
		css: { additions: 0, deletions: 0 },
		assembly: { additions: 0, deletions: 0 },
	},

	month: {
		py: { additions: 0, deletions: 0 },
		js: { additions: 0, deletions: 0 },
		java: { additions: 0, deletions: 0 },
		html: { additions: 0, deletions: 0 },
		css: { additions: 0, deletions: 0 },
		c: { additions: 0, deletions: 0 },
		assembly: { additions: 0, deletions: 0 },
	},
};

async function getOneCommit(owner, repo, ref, _callback) {
	await octokit
		.request("GET /repos/{owner}/{repo}/commits/{ref}", {
			owner: owner,
			repo: repo,
			ref: ref,
		})
		.then((response) => {
			const files = response.data.files;
			const curr_date = new Date();
			const commit_date = new Date(response.data.commit.author.date);
			const diff_in_time = curr_date.getTime() - commit_date.getTime();
			const diff_in_date = diff_in_time / (1000 * 3600 * 24);
			// console.log(diff_in_date);
			// console.log(owner + "/" + repo + "/" + ref);
			if (diff_in_date <= 1) {
				files.forEach((file) => {
					if (file.filename.endsWith(".py")) {
						stats.day.py.additions += file.additions;
						stats.day.py.deletions += file.deletions;
					}
					if (file.filename.endsWith(".js")) {
						stats.day.js.additions += file.additions;
						stats.day.js.deletions += file.deletions;
					}
					if (file.filename.endsWith(".java")) {
						stats.day.java.additions += file.additions;
						stats.day.java.deletions += file.deletions;
					}
					if (
						file.filename.endsWith(".c") ||
						file.filename.endsWith(".cpp")
					) {
						stats.day.c.additions += file.additions;
						stats.day.c.deletions += file.deletions;
					}
					if (file.filename.endsWith(".html")) {
						stats.day.html.additions += file.additions;
						stats.day.html.deletions += file.deletions;
					}
					if (file.filename.endsWith(".css")) {
						stats.day.css.additions += file.additions;
						stats.day.css.deletions += file.deletions;
					}
					if (
						file.filename.endsWith(".asm") ||
						file.filename.endsWith(".s")
					) {
						stats.day.assembly.additions += file.additions;
						stats.day.assembly.deletions += file.deletions;
					}
				});
			}
			if (diff_in_date <= 7) {
				files.forEach((file) => {
					if (file.filename.endsWith(".py")) {
						stats.week.py.additions += file.additions;
						stats.week.py.deletions += file.deletions;
					}
					if (file.filename.endsWith(".js")) {
						stats.week.js.additions += file.additions;
						stats.week.js.deletions += file.deletions;
					}
					if (file.filename.endsWith(".java")) {
						stats.week.java.additions += file.additions;
						stats.week.java.deletions += file.deletions;
					}
					if (
						file.filename.endsWith(".c") ||
						file.filename.endsWith(".cpp")
					) {
						stats.week.c.additions += file.additions;
						stats.week.c.deletions += file.deletions;
					}

					if (file.filename.endsWith(".html")) {
						stats.week.html.additions += file.additions;
						stats.week.html.deletions += file.deletions;
					}
					if (file.filename.endsWith(".css")) {
						stats.week.css.additions += file.additions;
						stats.week.css.deletions += file.deletions;
					}
					if (
						file.filename.endsWith(".asm") ||
						file.filename.endsWith(".s")
					) {
						stats.week.assembly.additions += file.additions;
						stats.week.assembly.deletions += file.deletions;
					}
				});
			}
			if (diff_in_date <= 30) {
				files.forEach((file) => {
					if (file.filename.endsWith(".py")) {
						stats.month.py.additions += file.additions;
						stats.month.py.deletions += file.deletions;
					}
					if (file.filename.endsWith(".js")) {
						stats.month.js.additions += file.additions;
						stats.month.js.deletions += file.deletions;
					}
					if (file.filename.endsWith(".java")) {
						stats.month.java.additions += file.additions;
						stats.month.java.deletions += file.deletions;
					}
					if (
						file.filename.endsWith(".c") ||
						file.filename.endsWith(".cpp")
					) {
						stats.month.c.additions += file.additions;
						stats.month.c.deletions += file.deletions;
					}

					if (file.filename.endsWith(".html")) {
						stats.month.html.additions += file.additions;
						stats.month.html.deletions += file.deletions;
					}
					if (file.filename.endsWith(".css")) {
						stats.month.css.additions += file.additions;
						stats.month.css.deletions += file.deletions;
					}
					if (
						file.filename.endsWith(".asm") ||
						file.filename.endsWith(".s")
					) {
						stats.month.assembly.additions += file.additions;
						stats.month.assembly.deletions += file.deletions;
					}
				});
			}
			_callback();
		})
		.catch((err) => {
			console.log(err);
			_callback();
		});

	// console.log(stats);
}

async function getUserEvent(username, _callback) {
	const response = await octokit.request("GET /users/{username}/events", {
		username: username,
		per_page: 100,
		page: 0,
	});
	const filteredResponse = response.data.filter((event) => {
		const created_date = new Date(event.created_at);
		const curr_date = new Date();
		const diff_in_time = curr_date.getTime() - created_date.getTime();
		const diff_in_date = diff_in_time / (1000 * 3600 * 24);
		return (
			event.type === "PushEvent" &&
			event.actor.login === "rohanj-02" &&
			diff_in_date <= 30
		);
	});

	let commitSHAs = [];
	await filteredResponse.forEach((pushEvent) => {
		const repo_name = pushEvent.repo.name;
		const x = repo_name.split("/");
		commitSHAs = commitSHAs.concat(
			pushEvent.payload.commits.map((commit) => {
				const body = {
					owner: x[0],
					repo: x[1],
					ref: commit.sha,
				};
				return body;
			})
		);
	});
	// console.log(commitSHAs);
	let itemsDone = 0;
	await commitSHAs.forEach(async (commit, index, array) => {
		await getOneCommit(commit.owner, commit.repo, commit.ref, () => {
			itemsDone++;
			if (itemsDone === array.length) {
				console.log(stats);
				_callback();
			}
		});
	});
}

function updateHTML() {
	document.getElementsByClassName("last-day")[0].innerHTML =
		`<h3>Python</h3><p>${
			stats.day.py.additions - stats.day.py.deletions
		}</p>` +
		`<h3>Java</h3><p>${
			stats.day.java.additions - stats.day.java.deletions
		}</p>` +
		`<h3>JavaScript</h3><p>${
			stats.day.js.additions - stats.day.js.deletions
		}</p>`;
	document.getElementsByClassName("last-week")[0].innerHTML =
		`<h3>Python</h3><p>${
			stats.week.py.additions - stats.week.py.deletions
		}</p>` +
		`<h3>Java</h3><p>${
			stats.week.java.additions - stats.week.java.deletions
		}</p>` +
		`<h3>JavaScript</h3><p>${
			stats.week.js.additions - stats.week.js.deletions
		}</p>`;
	document.getElementsByClassName("last-month")[0].innerHTML =
		`<h3>Python</h3><p>${
			stats.month.py.additions - stats.month.py.deletions
		}</p>` +
		`<h3>Java</h3><p>${
			stats.month.java.additions - stats.month.java.deletions
		}</p>` +
		`<h3>JavaScript</h3><p>${
			stats.month.js.additions - stats.month.js.deletions
		}</p>`;
}

// getUserEvent("rohanj-02", updateHTML);
const update = (user) => new Promise((resolve) => getUserEvent(user, resolve));
update("rohanj-02")
	.then(() => updateHTML())
	.catch((err) => console.log(err));
