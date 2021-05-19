import { useAnimation } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectSection(): JSX.Element {
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
			id="projects"
			className="bg-primary text-secondary flex flex-col items-center justify-center p-4 flex-1"
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
				<h1 className="font-semibold text-4xl">My Projects</h1>
			</motion.div>
			<div className="flex flex-col container max-w-4xl items-center justify-center">
				<ProjectCard
					project={{
						name: 'Memboro',
						description: 'Some app',
						image: './images/Memboro.png',
						link: '/memboro',
					}}
				/>

				<ProjectCard
					project={{
						name: 'Memboro',
						description: 'Some app',
						image: './images/Memboro.png',
						link: '/memboro',
					}}
				/>
				<div className="flex self-end mr-4">
					<a className="hover:underline float-right" href="/projects">
						See all Projects
					</a>
				</div>
			</div>
		</div>
	);
}
