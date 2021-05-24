import { getAllProjects } from '@/lib/projects';
import { ProjectSlug } from '@/types/project';
import React from 'react';
import Layout from '../../components/Layout/layout';
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
		<Layout>
			<div className="">
				<ProjectSection projects={data} />
			</div>
		</Layout>
	);
}

export default ProjectHomePage;
