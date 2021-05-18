import React from 'react';
import Link from 'next/link';
import { GitHub, Globe } from 'react-feather';
type Props = {
	link?: string;
	website?: string;
	github?: string;
};

function ProjectLinks(props: Props): JSX.Element {
	const { link, website, github } = props;
	// console.log(tech);
	if (!link && !github && !website) {
		return <></>;
	}
	return (
		<div>
			<h3 className="text-2xl font-semibold">Important Links</h3>
			<hr className="h-0.5 my-2 bg-accent border-none" />
			<div className="flex flex-wrap">
				{(website || link) && (
					<div className="m-1 rounded-full flex bg-secondary text-primary">
						<a href={website || link} target="_blank" rel="noreferrer">
							<div className="p-2 text-center h-10 w-10">
								<Globe />
							</div>
						</a>
					</div>
				)}
				{github && (
					<div className="m-1 rounded-full flex bg-secondary text-primary">
						<Link href={github}>
							<a target="_blank" rel="noreferrer">
								<div className="p-2 text-center h-10 w-10">
									<GitHub />
								</div>
							</a>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectLinks;
