import Layout from '../components/Layout/layout';
import ProjectSection from '../components/Projects/ProjectSection';
import Hero from '../components/Hero/Hero';
// import Statistics from '../components/Statistics/Statistics';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import Head from 'next/head';
import { ProjectSlug } from '@/types/project';
import { getFeaturedProjects } from '@/lib/projects';

export async function getStaticProps(): Promise<{
	props: {
		data: [ProjectSlug];
	};
}> {
	const projects = getFeaturedProjects();
	// const projectData = getProjectData(params.slug);
	return {
		props: {
			data: projects,
		},
	};
}

export default function Home({
	data: projects,
}: {
	data: [ProjectSlug];
}): JSX.Element {
	return (
		<div className="h-screen">
			<Layout>
				<Head>
					<title>Rohan Jain | Portfolio</title>
				</Head>
				<Hero />
				<AboutMe />
				<ProjectSection projects={projects} seeAll />
				{/* <Statistics /> */}
				<Contact />
			</Layout>
		</div>
	);
}
