import React from 'react';
import Section from '../Layout/Section';
import { motion } from 'framer-motion';
import AnimateWhenVisible from '../utils/AnimateWhenVisible';

export default function AboutMe(): JSX.Element {
	return (
		<Section id="about-me" title="About Me" inverted>
			<div className="flex justify-center mr-0 sm:mr-4 mb-4 sm:mb-0 items-center">
				<AnimateWhenVisible
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
					}}>
					<motion.img
						src="./images/profile_image.webp"
						className="max-h-72"
						alt="Rohan Jain"
					/>
				</AnimateWhenVisible>
			</div>
			<div className="sm:container max-w-4xl mx-4 px-4 mb-10 pb-5 py-6 overflow-hidden">
				<AnimateWhenVisible
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
					<motion.p>
						I am a full stack developer from New Delhi and a 3rd year BTech
						student from{' '}
						<a
							href="https://www.iiitd.ac.in/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							IIITD
						</a>
						. I work with{' '}
						<a
							href="https://www.geeksforgeeks.org/mern-stack/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							MERN
						</a>{' '}
						stack,{' '}
						<a
							href="https://www.nextjs.com"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							Nextjs
						</a>
						,{' '}
						<a
							href="https://www.svelte.dev"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							Svelte
						</a>
						,{' '}
						<a
							href="https://flask.palletsprojects.com/en/2.0.x/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							Flask
						</a>{' '}
						and{' '}
						<a
							href="https://www.djangoproject.com/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							Django
						</a>
						. <br /> <br />I am passionate about problem solving and coming up
						with innovative solutions. I can pick up new skills quickly and
						juggle multiple projects with relative ease. <br />
						<br />I am currently learning Machine Learning and working as a
						front end developer for{' '}
						<a
							href="https://www.memboro.com/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline">
							Memboro
						</a>
						. I am interested in working on creative projects.
					</motion.p>
				</AnimateWhenVisible>
			</div>
		</Section>
	);
}
