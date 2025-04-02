import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import Section from '../Layout/Section';
import { ProjectSlug } from '@/types/project';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';

export default function ProjectSection({
	projects,
	seeAll = false,
}: {
	seeAll?: boolean;
	projects: [ProjectSlug];
}): JSX.Element {
	return (
		<Section id={seeAll ? 'projects' : ''} title="My Projects">
			<div className="flex flex-col max-w-4xl items-center justify-center">
				{projects?.map((proj, idx) => <ProjectCard key={idx} project={proj} />)}

				{seeAll && (
					<FadeInWhenVisible classNames="flex self-end mr-4">
						<Link
							href="/projects"
							scroll
							className="hover:underline float-right"
						>
							See all Projects
						</Link>
					</FadeInWhenVisible>
				)}
			</div>
		</Section>
	);
}
