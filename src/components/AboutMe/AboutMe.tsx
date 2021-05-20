import React from 'react';
import Section from '../Layout/Section';
import { motion } from 'framer-motion';

export default function AboutMe(): JSX.Element {
	return (
		<Section id="about-me" title="About Me" inverted>
			<div className="flex justify-center mr-0 sm:mr-4 mb-4 sm:mb-0">
				<div>
					<motion.img
						// animate={controls}
						// initial="hidden"
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
					// animate={controls}
					// initial="hidden"
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
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</motion.p>
			</div>
		</Section>
	);
}
