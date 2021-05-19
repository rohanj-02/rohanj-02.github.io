import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AboutMe(): JSX.Element {
	const controls = useAnimation();
	const [animated, setAnimated] = useState(false);
	const { ref, inView } = useInView();
	useEffect(() => {
		if (animated) {
			return;
		}
		if (inView) {
			controls.start('visible');
			setAnimated(true);
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);
	return (
		<div
			id="about-me"
			className="bg-secondary text-primary flex flex-col items-center justify-center p-5 mt-10 flex-1 "
			style={{ scrollMarginTop: '5rem' }}>
			<motion.div
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={{
					hidden: {
						x: '-6rem',
						opacity: 0,
						scale: 0.6,
					},
					visible: {
						x: '0rem',
						opacity: 1,
						scale: 1,
						transition: {
							delay: 0.2,
						},
					},
				}}
				className="mx-4 mt-16 mb-8 p-4">
				<h1 className="font-semibold text-4xl">About Me</h1>
			</motion.div>
			<motion.div className="container max-w-4xl flex flex-col sm:flex-row mx-4 px-4 mb-16 pb-5">
				<div className="flex justify-center mr-0 sm:mr-4 mb-4 sm:mb-0">
					<div>
						<motion.img
							animate={controls}
							initial="hidden"
							variants={{
								hidden: {
									scale: 0,
								},
								visible: {
									scale: [0, 1.2, 1],
									transition: {
										delay: 0.5,
									},
								},
							}}
							src="./images/profile_image.png"
							className="max-h-72"
						/>
					</div>
				</div>
				<div className="container max-w-4xl mx-4 px-4 mb-10 pb-5 py-6">
					<motion.p
						animate={controls}
						initial="hidden"
						variants={{
							hidden: {
								opacity: 0,
								x: '8rem',
							},
							visible: {
								opacity: 1,
								x: '0rem',
								transition: {
									delay: 0.5,
								},
							},
						}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</motion.p>
				</div>
			</motion.div>
		</div>
	);
}
