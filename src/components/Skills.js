import React from "react";
import react_icon from "../images/react_icon.svg";
import nodejs_icon from "../images/nodejs_icon.svg";
import mongodb_icon from "../images/mongodb_icon.svg";
import bootstrap_icon from "../images/bootstrap_icon.svg";
import java_icon from "../images/java_icon.svg";
import python_icon from "../images/python_icon.svg";

export default function Skills() {
	return (
		<div className="skills">
			<h2>Skills</h2>
			<p>
				Worked with MERN Stack and made projects <br />
				in Python and Java.
			</p>
			<div className="programs">
				<img src={react_icon} alt="React icon" />
				<img src={nodejs_icon} alt="Nodejs icon" />
				<img
					src={mongodb_icon}
					alt="MongoDB icon"
					style={{ width: "20px" }}
				/>
				<img src={bootstrap_icon} alt="Bootstrap icon" />
				<img src={java_icon} alt="Java icon" />
				<img src={python_icon} alt="Python icon" />
			</div>
		</div>
	);
}
