import Layout from '../components/layout';
import Projects from '../components/Projects';
import Hero from '../components/Hero/Hero';
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
				<div className="bg-primary text-secondary flex flex-col items-center justify-center p-4 flex-1 ">
					<div className="mx-4 mt-16 mb-4 p-4">
						<h2 className="font-semibold text-3xl">My Projects</h2>
					</div>
					<div className="">
						<Projects />
					</div>
				</div>
			</Layout>
		</div>
	);
}
