import React from 'react';
import '../styles/App.css';
import AppNavBar from './AppNavBar';
import Landing from './Landing';
import Skills from './Skills';
import Work1 from './Work1';
// import Statistics from "./Statistics";
import Footer from './Footer';
import Rummy from '../images/Rummy.png';
import ResetMSM from '../images/ResetMSM.png';
import Memboro from '../images/Memboro.png';
// import Pixels from '../images/Pixels.png';
// import RandomVocab from '../images/RandomVocab.png';

function App() {
	return (
		<div className="App">
			<AppNavBar />
			<Landing />
			<Skills />
			<Work1
				web_link="https://resetmsm.com"
				img_src={ResetMSM}
				title="Reset MSM"
				isWork1
			/>
			<Work1 web_link="https://memboro.com" img_src={Memboro} title="Memboro" />
			<Work1
				git_link="https://github.com/rohanj-02/Rummy"
				img_src={Rummy}
				title="Rummy Game"
				isWork1
			/>
			<Footer />
			{/* <Statistics /> */}
		</div>
	);
}

export default App;
