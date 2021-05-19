import React from 'react';
import Projects from '../Projects';
export default function ProjectSection(): JSX.Element {
	return (
		<div
			id="projects"
			className="bg-primary text-secondary flex flex-col items-center justify-center p-4 flex-1"
			style={{ scrollMarginTop: '5rem' }}>
			<div className="mx-4 mt-16 mb-4 p-4">
				<h2 className="font-semibold text-3xl">My Projects</h2>
			</div>
			<div className="">
				<Projects />
			</div>
		</div>
	);
}
