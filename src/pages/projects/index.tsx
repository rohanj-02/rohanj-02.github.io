import React from 'react';
import Layout from '../../components/Layout/layout';
import ProjectSection from '../../components/Projects/ProjectSection';

function ProjectHomePage(): JSX.Element {
	return (
		<Layout>
			<div className="">
				<ProjectSection />
			</div>
		</Layout>
	);
}

export default ProjectHomePage;
