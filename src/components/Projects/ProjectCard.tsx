import React from 'react';
import Link from 'next/link';
import Technologies from './Technologies';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';
import { motion } from 'framer-motion';
import { ProjectSlug } from '@/types/project';

type ProjectCardPropTypes = {
	project: ProjectSlug;
};

export default function ProjectCard(props: ProjectCardPropTypes): JSX.Element {
	const { name, description, images, slug, technologies } = props.project;

	return (
		<FadeInWhenVisible>
			<Link href={`/projects/${slug}`}>
				<motion.a
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.2 },
					}}
					className="flex flex-1 flex-col-reverse sm:flex-row rounded-lg shadow-xl my-6 mx-2 items-stretch cursor-pointer">
					<div className="flex flex-col w-full sm:w-1/2 bg-secondary text-primary items-center justify-center min-h-48 max-h-64">
						<h1 className="text-2xl text-center font-semibold text-accent m-2 mt-4 p-2">
							{name}
						</h1>
						<p
							className="text-sm text-center m-2 p-2 pb-0 mt-0 overflow-hidden"
							style={{
								display: '-webkit-box',
								WebkitLineClamp: 3,
								WebkitBoxOrient: 'vertical',
								// textOverflow: 'ellipsis',
							}}>
							{description}
						</p>
						<div className="flex m-2 p-2 mt-0 max-h-22 overflow-hidden">
							<Technologies tech={technologies} />
						</div>
					</div>
					<div
						className="w-full sm:w-1/2 min-h-48 max-h-64 overflow-hidden flex items-stretch"
						style={{ alignContent: 'stretch' }}>
						<img
							src={images[0]}
							alt={description}
							className="object-cover flex-grow self-stretch"
						/>
					</div>
				</motion.a>
			</Link>
		</FadeInWhenVisible>
	);
}
