import React from 'react';
import ImageCarousel from './ImageCarousel';
import Technologies from './Technologies';

type ProjectCardPropTypes = {
	project: { name: string; description: string; image: string; link: string };
};

export default function ProjectCard(props: ProjectCardPropTypes): JSX.Element {
	const { name, description, image, link } = props.project;

	return (
		<div className="flex flex-1 flex-col-reverse sm:flex-row rounded-lg shadow-xl my-6 mx-2 items-stretch">
			<div className="flex flex-col w-full sm:w-1/2 bg-secondary text-primary items-center justify-center min-h-48">
				<h1 className="text-2xl text-center font-semibold text-accent m-2 p-2">
					{name}
					{link}
				</h1>
				<p className="text-sm text-center m-2 p-2 mt-0">{description}</p>
				<div className="flex m-2 p-2">
					<Technologies tech={['React', 'Redux']} />
				</div>
			</div>
			<div className="w-full sm:w-1/2">
				<ImageCarousel images={[image]} slug={description} />
			</div>
		</div>
	);
}
