import React, { Component } from "react";

export default class StatsTab extends Component {
	render() {
		const { py, js, java, c, html, css, assembly } = this.props.obj;
		return (
			<div class="stats_tab">
				<h4>Python</h4>
				<p>
					{py.additions - py.deletions < 0
						? 0
						: py.additions - py.deletions}
				</p>
				<h4>JavaScript</h4>
				<p>
					{js.additions - js.deletions < 0
						? 0
						: js.additions - js.deletions}
				</p>
				<h4>Java</h4>
				<p>
					{java.additions - java.deletions < 0
						? 0
						: java.additions - java.deletions}
				</p>
				<h4>C/C++</h4>
				<p>
					{c.additions - c.deletions < 0 ? 0 : c.additions - c.deletions}
				</p>
				<h4>Assembly</h4>
				<p>
					{assembly.additions - assembly.deletions < 0
						? 0
						: assembly.additions - assembly.deletions}
				</p>
				<h4>HTML</h4>
				<p>
					{html.additions - html.deletions < 0
						? 0
						: html.additions - html.deletions}
				</p>
				<h4>CSS</h4>
				<p>
					{css.additions - css.deletions < 0
						? 0
						: css.additions - css.deletions}
				</p>
			</div>
		);
	}
}
