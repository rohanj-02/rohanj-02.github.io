import React, { Component } from "react";
import git_logo from "../images/github_dark_icon.svg";

export default class Work1 extends Component {
	state = {
		git_link: this.props.git_link,
		img_src: this.props.img_src,
		title: this.props.title,
	};
	render() {
		return (
			<div class="work clearfix">
				<div class="work_text">
					<h1>{this.state.title}</h1>
					<a href={this.state.git_link}>
						<h5>View Project</h5>
					</a>
					<div class="underline"></div>
				</div>
				<ul>
					<li>
						<a href={this.state.git_link}>
							<img src={git_logo} alt="Github logo" />
						</a>
					</li>
				</ul>
				<a href={this.state.git_link}>
					<img src={this.state.img_src} alt="Project" class="work_image" />
				</a>
			</div>
		);
	}
}
