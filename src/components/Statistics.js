import React, { Component } from "react";
import { Octokit } from "@octokit/core";
import GITHUB_AUTH_KEY from "./config";
import StatsTab from "./StatsTab";

export default class Statistics extends Component {
	state = {
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
		octokit: new Octokit({ auth: `${GITHUB_AUTH_KEY}` }),
		selected: "month",
	};

	getOneCommit = async (owner, repo, ref) => {
		await this.state.octokit
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
				const { day, month, week } = this.state;
				if (diff_in_date <= 1) {
					files.forEach((file) => {
						if (file.filename.endsWith(".py")) {
							day.py.additions += file.additions;
							day.py.deletions += file.deletions;
						}
						if (file.filename.endsWith(".js")) {
							day.js.additions += file.additions;
							day.js.deletions += file.deletions;
						}
						if (file.filename.endsWith(".java")) {
							day.java.additions += file.additions;
							day.java.deletions += file.deletions;
						}
						if (
							file.filename.endsWith(".c") ||
							file.filename.endsWith(".cpp")
						) {
							day.c.additions += file.additions;
							day.c.deletions += file.deletions;
						}
						if (file.filename.endsWith(".html")) {
							day.html.additions += file.additions;
							day.html.deletions += file.deletions;
						}
						if (file.filename.endsWith(".css")) {
							day.css.additions += file.additions;
							day.css.deletions += file.deletions;
						}
						if (
							file.filename.endsWith(".asm") ||
							file.filename.endsWith(".s")
						) {
							day.assembly.additions += file.additions;
							day.assembly.deletions += file.deletions;
						}
					});
				}
				if (diff_in_date <= 7) {
					files.forEach((file) => {
						if (file.filename.endsWith(".py")) {
							week.py.additions += file.additions;
							week.py.deletions += file.deletions;
						}
						if (file.filename.endsWith(".js")) {
							week.js.additions += file.additions;
							week.js.deletions += file.deletions;
						}
						if (file.filename.endsWith(".java")) {
							week.java.additions += file.additions;
							week.java.deletions += file.deletions;
						}
						if (
							file.filename.endsWith(".c") ||
							file.filename.endsWith(".cpp")
						) {
							week.c.additions += file.additions;
							week.c.deletions += file.deletions;
						}

						if (file.filename.endsWith(".html")) {
							week.html.additions += file.additions;
							week.html.deletions += file.deletions;
						}
						if (file.filename.endsWith(".css")) {
							week.css.additions += file.additions;
							week.css.deletions += file.deletions;
						}
						if (
							file.filename.endsWith(".asm") ||
							file.filename.endsWith(".s")
						) {
							week.assembly.additions += file.additions;
							week.assembly.deletions += file.deletions;
						}
					});
				}
				if (diff_in_date <= 30) {
					files.forEach((file) => {
						if (file.filename.endsWith(".py")) {
							month.py.additions += file.additions;
							month.py.deletions += file.deletions;
						}
						if (file.filename.endsWith(".js")) {
							month.js.additions += file.additions;
							month.js.deletions += file.deletions;
						}
						if (file.filename.endsWith(".java")) {
							month.java.additions += file.additions;
							month.java.deletions += file.deletions;
						}
						if (
							file.filename.endsWith(".c") ||
							file.filename.endsWith(".cpp")
						) {
							month.c.additions += file.additions;
							month.c.deletions += file.deletions;
						}

						if (file.filename.endsWith(".html")) {
							month.html.additions += file.additions;
							month.html.deletions += file.deletions;
						}
						if (file.filename.endsWith(".css")) {
							month.css.additions += file.additions;
							month.css.deletions += file.deletions;
						}
						if (
							file.filename.endsWith(".asm") ||
							file.filename.endsWith(".s")
						) {
							month.assembly.additions += file.additions;
							month.assembly.deletions += file.deletions;
						}
					});
				}
				this.setState({
					day: day,
					month: month,
					week: week,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getUserEvent = async (username) => {
		const response = await this.state.octokit.request(
			"GET /users/{username}/events",
			{
				username: username,
				per_page: 100,
				page: 0,
			}
		);
		const filteredResponse = response.data.filter((event) => {
			const created_date = new Date(event.created_at);
			const curr_date = new Date();
			const diff_in_time = curr_date.getTime() - created_date.getTime();
			const diff_in_date = diff_in_time / (1000 * 3600 * 24);
			return (
				event.type === "PushEvent" &&
				event.actor.login === username &&
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
		await commitSHAs.forEach(async (commit) => {
			await this.getOneCommit(commit.owner, commit.repo, commit.ref);
		});
	};

	componentDidMount() {
		this.getUserEvent("rohanj-02");
	}

	handleClick = (e) => {
		this.setState({
			selected: e.target.name,
		});
	};

	render() {
		const { day, week, month, selected } = this.state;
		return (
			<div class="stats">
				<button onClick={this.handleClick} name="day">
					Day
				</button>
				<button onClick={this.handleClick} name="week">
					Week
				</button>
				<button onClick={this.handleClick} name="month">
					Month
				</button>
				{selected === "day" ? <StatsTab obj={day} /> : null}
				{selected === "week" ? <StatsTab obj={week} /> : null}
				{selected === "month" ? <StatsTab obj={month} /> : null}
			</div>
		);
	}
}
