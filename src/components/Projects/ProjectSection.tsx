import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import Section from '../Layout/Section';

export default function ProjectSection(): JSX.Element {
	return (
		<Section id="projects" title="My Projects" resetAnimation>
			<div className="flex flex-col container max-w-4xl items-center justify-center">
				<ProjectCard
					project={{
						name: 'Memboro',
						description: 'Some app',
						image: './images/Memboro.png',
						slug: 'memboro',
					}}
				/>

				<ProjectCard
					project={{
						name: 'Memboro',
						description: 'Some app',
						image: './images/Memboro.png',
						slug: 'memboro',
					}}
				/>
				<div className="flex self-end mr-4">
					<Link href="/projects">
						<a className="hover:underline float-right">See all Projects</a>
					</Link>
				</div>
			</div>
		</Section>
	);
}
