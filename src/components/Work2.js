import React, { Component } from "react";
import git_logo from "../images/github_dark_icon.svg";
import web_logo from "../images/globe_icon.svg";

export default class Work2 extends Component {
	state = {
		git_link: this.props.git_link,
		web_link: this.props.web_link,
		img_src: this.props.img_src,
		title: this.props.title,
	};
	render() {
		return (
			<div class="work2 clearfix">
				<div class="work_text">
					<h1>{this.state.title}</h1>
					<a href={this.state.web_link}>
						<h5>View Project</h5>
					</a>
					<div class="underline"></div>
				</div>
				<ul>
					<li>
						<a href={this.state.git_link}>
							<img src={git_logo} alt="Github logo" />
						</a>
						<a href={this.state.web_link}>
							<img src={web_logo} alt="Website logo" />
						</a>
					</li>
				</ul>
				<a href={this.state.web_link}>
					<img src={this.state.img_src} alt="Project" class="work_image" />
				</a>
			</div>
		);
	}
}
