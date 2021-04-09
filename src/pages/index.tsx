import Layout from '../components/layout';
import Projects from '../components/Projects';
import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<div className="h-screen">
			<Layout>
				<Head>
					<title>Rohan Jain | Portfolio</title>
				</Head>
				<main className="flex flex-col items-center justify-center mt-10 flex-1 text-left h-4/5">
					<div className="m-4 p-4">
						<h1 className="text-6xl font-semibold">
							Full-stack Developer & Student.
						</h1>
					</div>
					<div>
						<p className="text-2xl font-extralight m-2 p-2">
							Lorem Ipsum text here, and I love what I do.
						</p>
					</div>
					<div className="m-4 p-4">
						<img src="./images/profile_image.png" className="max-h-72" />
					</div>
					<div className="m-4 p-4 flex-grow bottom-0 flex">
						<img
							src="./images/down-arrow.png"
							className="mt-auto mb-0 flex-col-reverse"
						/>
					</div>
				</main>
				<div className="bg-secondary text-primary flex flex-col items-center justify-center mt-10 p-5 flex-1 ">
					<div className="mx-4 mt-16 mb-4 p-4">
						<h2 className="font-semibold text-3xl">Hi, I am Rohan Jain.</h2>
					</div>
					<div className="max-w-4xl  text-center mx-4 px-4 mb-16 pb-5">
						<p>
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
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
