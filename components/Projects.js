import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
	const projects = [
		{
			name: 'Memboro',
			description: 'Some app',
			image: './images/Memboro.png',
			link: '/memboro',
		},
		{
			name: 'Memboro',
			description:
				'Some app Some app Some app Some app Some app Some app Some app Some app Some app Some app Some app Some app Some app Some app Some app ',
			image: './images/Memboro.png',
			link: '/memboro',
		},
		{
			name: 'Memboro',
			description: 'Some app',
			image: './images/Memboro.png',
			link: '/memboro',
		},
		{
			name: 'Memboro',
			description: 'Some app',
			image: './images/Memboro.png',
			link: '/memboro',
		},
		{
			name: 'Memboro',
			description: 'Some app',
			image: './images/Memboro.png',
			link: '/memboro',
		},
		{
			name: 'Memboro',
			description: 'Some app',
			image: './images/Memboro.png',
			link: '/memboro',
		},
	];
	return (
		<div className="flex flex-wrap text-center justify-center mx-4 px-4 mb-16 pb-5">
			{projects.map(project => (
				<ProjectCard project={project} />
			))}
		</div>
	);
}
