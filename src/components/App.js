import React from "react";
import "../styles/App.css";
import AppNavBar from "./AppNavBar";
import Landing from "./Landing";
import Skills from "./Skills";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Statistics from "./Statistics";
import Footer from "./Footer";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

function App() {
	return (
		<div className="App">
			<AppNavBar />
			<Landing />
			<Skills />
			<Work1
				git_link="https://github.com/rohanj-02/Rummy"
				img_src={project1}
				title="Rummy Game"
			/>
			<Work2
				git_link="https://github.com/rohanj-02/Pixels"
				web_link="https://rohan19095.wixsite.com/mysite"
				img_src={project2}
				title="PIXELS"
			/>
			<Work1
				git_link="https://github.com/rohanj-02/random-word-thrower"
				img_src={project3}
				title="Vocabulary Builder"
			/>
			<Footer />
			<Statistics />
		</div>
	);
}

export default App;
