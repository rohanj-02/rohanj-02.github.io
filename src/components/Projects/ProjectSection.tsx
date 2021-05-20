import React from 'react';
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
		</Section>
	);
}
