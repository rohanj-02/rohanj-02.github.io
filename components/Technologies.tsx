import React from 'react';
import TechPill from './TechPill';

type Props = {
	tech: string[];
};

function Technologies(props: Props): JSX.Element {
	const { tech } = props;
	// console.log(tech);
	return (
		<div>
			<h3 className="text-2xl font-semibold">Technologies Used</h3>
			<hr className="h-0.5 my-2 bg-accent border-none" />
			<div className="flex flex-wrap">
				{tech.map((elem, index) => (
					<TechPill data={elem} key={index} />
				))}
			</div>
		</div>
	);
}

export default Technologies;
