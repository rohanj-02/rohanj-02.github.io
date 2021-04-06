import React from 'react';

export default function ProjectCard(props) {
	const { name, description, image, link } = props.project;
	console.log(props.project);

	return (
		<div
			className="flex max-w-md rounded-lg shadow-md  m-2"
			style={{ background: `url(${image})` }}>
			<div className="flex-grow p-8 flex flex-col items-center justify-center transition duration-500 ease-in-out bg-transparent hover:bg-accent hover:bg-opacity-50 transform">
				<div>
					<h1>
						<a href={link}>{name}</a>
					</h1>
				</div>
				<div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
