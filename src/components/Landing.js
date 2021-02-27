import React from "react";
import profile_image from "../images/profile_image.png";
import scroll_down from "../images/scroll_down.svg";

export default function Landing() {
	return (
		<div className="landing">
			<div className="landing_wrapper">
				<div className="landing_left">
					<h1>Rohan Jain.</h1>
					<p>
						Hello! My name is Rohan Jain. I am pursuing a degree in
						Bachelor of Technology specialising in Computer Science.
					</p>
					<ul>
						<li>
							<p>Java</p>
						</li>
						<li>
							<p>Python</p>
						</li>
						<li>
							<p>C++</p>
						</li>
						<li>
							<p>Full Stack Web Developer</p>
						</li>
					</ul>
				</div>
				<div className="landing_right">
					<img src={profile_image} alt="profile pic" width="300px" />
				</div>
			</div>
			<img src={scroll_down} alt="scroll down" className="scroll" />
		</div>
	);
}
