import { getAllProjectSlugs, getProjectData } from '@/lib/projects';
import { ProjectSlug } from '@/types/project';
import Head from 'next/head';
import Technologies from '../../components/Projects/Technologies';
import ImageCarousel from '../../components/Projects/MediaCarousel';
import ProjectLinks from '../../components/ProjectLinks';

export async function getStaticPaths(): Promise<{
	paths: {
		params: {
			slug: string;
		};
	}[];
	fallback: boolean;
}> {
	const paths = getAllProjectSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({
	params,
}: {
	params: any;
}): Promise<{
	props: {
		data: ProjectSlug;
	};
}> {
	const projectData = getProjectData(params.slug);
	return {
		props: {
			data: projectData,
		},
	};
}

export default function Project({ data }: { data: ProjectSlug }): JSX.Element {
	return (
		<>
			<Head>
				<title>{data.name + ' | Rohan Jain'}</title>
			</Head>
			<div className="flex justify-center m-2 p-3 mt-20 pt-16">
				<h1 className="text-5xl font-semibold text-center">{data.name}</h1>
			</div>
			<div className="flex md:w-5/6 mx-auto flex-col md:flex-row">
				<div className="m-4 p-4 mb-2 pb-2 md:mb-4 md:pb-4 md:w-1/2">
					<ImageCarousel images={data.images} slug={data.slug} />
				</div>
				<div className="m-4 p-4 mt-2 pt-2 md:ml-0 md:mt-4 md:pt-4 md:pl-0 md:w-1/2">
					<p>{data.description}</p>
					<div className="mt-6">
						<Technologies tech={data.technologies} inverted />
					</div>
					<div className="mt-6">
						<ProjectLinks
							link={data?.link}
							website={data?.website}
							github={data?.github}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
