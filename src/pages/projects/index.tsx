import { getAllProjects } from '@/lib/projects';
import { ProjectSlug } from '@/types/project';
import React from 'react';
import ProjectSection from '../../components/Projects/ProjectSection';

export async function getStaticProps(): Promise<{
	props: {
		data: [ProjectSlug];
	};
}> {
	const projects = getAllProjects();
	// const projectData = getProjectData(params.slug);
	return {
		props: {
			data: projects,
		},
	};
}

function ProjectHomePage({ data }: { data: [ProjectSlug] }): JSX.Element {
	return (
		<div className="">
			<ProjectSection projects={data} />
		</div>
	);
}

export default ProjectHomePage;
