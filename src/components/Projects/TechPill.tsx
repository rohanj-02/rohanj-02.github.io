import React from 'react';

type Props = {
	data: string;
	inverted?: boolean;
};

function TechPill(props: Props): JSX.Element {
	const { data, inverted } = props;
	const classes = `rounded-full m-1 py-2 px-4  text-xs ${
		inverted ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
	}`;
	return <div className={classes}>{data}</div>;
}

export default TechPill;
