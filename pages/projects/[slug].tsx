import { getAllProjectSlugs, getProjectData } from 'lib/projects';
import { ProjectSlug } from 'types/project';
import Layout from '../../components/layout';

export async function getStaticPaths(): Promise<{
	paths: any;
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

export default function Post({ data }: { data: ProjectSlug }): JSX.Element {
	return <Layout>{data.slug}</Layout>;
}
