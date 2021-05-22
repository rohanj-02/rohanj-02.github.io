import Layout from '../components/Layout/layout';
import ProjectSection from '../components/Projects/ProjectSection';
import Hero from '../components/Hero/Hero';
// import Statistics from '../components/Statistics/Statistics';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<div className="h-screen">
			<Layout>
				<Head>
					<title>Rohan Jain | Portfolio</title>
				</Head>
				<Hero />
				<AboutMe />
				<ProjectSection />
				{/* <Statistics /> */}
				<Contact />
			</Layout>
		</div>
	);
}
