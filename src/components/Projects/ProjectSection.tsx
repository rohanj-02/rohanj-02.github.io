import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import Section from '../Layout/Section';
import { ProjectSlug } from '@/types/project';

export default function ProjectSection({
	projects,
	seeAll = false,
}: {
	seeAll?: boolean;
	projects: [ProjectSlug];
}): JSX.Element {
	return (
		<Section id="projects" title="My Projects">
			<div className="flex flex-col max-w-4xl items-center justify-center">
				{projects?.map((proj, idx) => (
					<ProjectCard key={idx} project={proj} />
				))}
				{/* <ProjectCard
					project={{
						name: 'Demo Project',
						description: 'This is the description of my so called project',
						image:
							'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
						slug: 'demo',
					}}
				/>
				<ProjectCard
					project={{
						name: 'Demo Project',
						description: 'This is the description of my so called project',
						image:
							'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
						slug: 'demo',
					}}
				/> */}

				{seeAll && (
					<div className="flex self-end mr-4">
						<Link href="/projects">
							<a className="hover:underline float-right">See all Projects</a>
						</Link>
					</div>
				)}
			</div>
		</Section>
	);
}
