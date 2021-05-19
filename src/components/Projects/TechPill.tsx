import React from 'react';

type Props = {
	data: string;
};

function TechPill(props: Props): JSX.Element {
	const { data } = props;
	return (
		<div className="rounded-full m-1 py-2 px-4 bg-primary text-secondary text-xs">
			{data}
		</div>
	);
}

export default TechPill;
