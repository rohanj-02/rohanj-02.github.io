import React from 'react';
import Link from 'next/link';
import Technologies from './Technologies';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';
import { motion } from 'framer-motion';

type ProjectCardPropTypes = {
	project: { name: string; description: string; image: string; slug: string };
};

export default function ProjectCard(props: ProjectCardPropTypes): JSX.Element {
	const { name, description, image, slug } = props.project;

	return (
		<FadeInWhenVisible>
			<Link href={`/projects/${slug}`} scroll>
				<motion.a
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.2 },
					}}
					className="flex flex-1 flex-col-reverse sm:flex-row rounded-lg shadow-xl my-6 mx-2 items-stretch cursor-pointer">
					<div className="flex flex-col w-full sm:w-1/2 bg-secondary text-primary items-center justify-center min-h-48">
						<h1 className="text-2xl text-center font-semibold text-accent m-2 p-2">
							{name}
						</h1>
						<p className="text-sm text-center m-2 p-2 mt-0">{description}</p>
						<div className="flex m-2 p-2">
							<Technologies tech={['React', 'Redux']} />
						</div>
					</div>
					<div className="w-full sm:w-1/2">
						<img src={image} alt={description} />
					</div>
				</motion.a>
			</Link>
		</FadeInWhenVisible>
	);
}
