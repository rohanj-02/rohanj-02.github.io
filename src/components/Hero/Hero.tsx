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
				className="p-4 z-10"
				initial="hidden"
				animate="visible"
				variants={getFadeInVariants(0.4)}
			>
				<h1 className="text-6xl font-semibold text-center">
					Hello, I am <span className="text-accent">Rohan Jain!</span>
				</h1>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				className="z-10"
				variants={getFadeInVariants(0.8)}
			>
				<p className="text-3xl m-2 p-2 text-center">
					A software engineer with a passion for building
					<br />
					scalable systems and learning new technologies.
				</p>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={getFadeInVariants(1)}
				className="m-4 p-4 z-10"
			>
				<SocialLinks />
			</motion.div>
			<div className="absolute top-0 left-0">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.5,-26.4C27.7,-20.8,38.6,-18.4,46,-11.3C53.4,-4.1,57.3,7.9,58.6,23.7C59.8,39.5,58.5,59.1,48.3,62.7C38.1,66.2,19,53.9,2.4,50.5C-14.2,47.2,-28.4,52.9,-38.4,49.2C-48.4,45.6,-54.1,32.5,-62.5,17.7C-70.8,2.9,-81.7,-13.6,-75.9,-22.5C-70.1,-31.5,-47.5,-32.9,-32,-36.1C-16.6,-39.3,-8.3,-44.4,-1.3,-42.5C5.6,-40.7,11.2,-31.9,19.5,-26.4Z"
						fill="var(--color-secondary)"
						className="opacity-10"
						transform="translate(-10 -10)"
					/>
				</svg>
			</div>
			<div className="absolute bottom-0 right-0">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="var(--color-secondary)"
						className="opacity-10"
						transform="translate(200 200)"
						d="M36.1,-44.6C45,-43.1,49.4,-30.3,54.6,-17.1C59.9,-3.8,66.1,9.8,64,22.2C62,34.7,51.7,45.8,39.7,46.3C27.6,46.8,13.8,36.7,3.7,31.6C-6.4,26.5,-12.8,26.5,-21,24.7C-29.1,22.9,-38.9,19.4,-46.3,11.5C-53.7,3.7,-58.5,-8.5,-57.9,-21.3C-57.2,-34.2,-50.9,-47.9,-40.4,-48.8C-29.8,-49.8,-14.9,-38,-0.7,-37.1C13.6,-36.2,27.1,-46.1,36.1,-44.6Z"
					/>
				</svg>
			</div>

			{/* <div className="m-4 p-4 grow bottom-0 flex">
				<img
					src="./images/down-arrow.png"
					className="mt-auto mb-0 flex-col-reverse"
				/>
			</div> */}
		</motion.main>
	);
}
