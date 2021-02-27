import React from 'react';
import git_logo from '../images/github_dark_icon.svg';
import web_logo from '../images/globe_icon.svg';

export default function Work1(props) {
	return (
		<div className={props.isWork1 ? 'work clearfix' : 'work2 clearfix'}>
			<div className="work_text">
				<h1>{props.title}</h1>
				<a href={props.web_link ?? props.git_link ?? '#'}>
					<h5>View Project</h5>
				</a>
				<div className="underline"></div>
			</div>
			<ul>
				{props.git_link && (
					<li>
						<a href={props.git_link}>
							<img src={git_logo} alt="Github logo" />
						</a>
					</li>
				)}
				{props.web_link && (
					<li>
						<a href={props.web_link}>
							<img src={web_logo} alt="Website logo" />
						</a>
					</li>
				)}
			</ul>
			<a href={props.git_link}>
				<img src={props.img_src} alt="Project" className="work_image" />
			</a>
		</div>
	);
}
