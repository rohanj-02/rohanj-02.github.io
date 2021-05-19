import React from 'react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

function getFadeInVariants(num = 0.4) {
	const fadeInVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: num,
			},
		},
	};
	return fadeInVariants;
}

export default function Hero(): JSX.Element {
	return (
		<motion.main className="h-screen flex flex-col items-center justify-center flex-1 text-left">
			<motion.div
				className="p-4"
				initial="hidden"
				animate="visible"
				variants={getFadeInVariants(0.4)}>
				<h1 className="text-6xl font-semibold text-center">
					Hello, I am <span className="text-accent">Rohan Jain!</span>
				</h1>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={getFadeInVariants(0.8)}>
				<p className="text-4xl font-medium m-2 p-2 text-center">
					I am a full stack web developer.
				</p>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={getFadeInVariants(1)}
				className="m-4 p-4">
				<SocialLinks />
				{/* <img src="./images/profile_image.png" className="max-h-72" /> */}
			</motion.div>
			{/* <div className="m-4 p-4 flex-grow bottom-0 flex">
				<img
					src="./images/down-arrow.png"
					className="mt-auto mb-0 flex-col-reverse"
				/>
			</div> */}
		</motion.main>
	);
}
