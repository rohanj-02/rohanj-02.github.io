import React from 'react';
import { SiGithub } from 'react-icons/si';
import { BiGlobe } from 'react-icons/bi';
import SocialBadge from '../components/Hero/SocialBadge';

type Props = {
	link?: string;
	website?: string;
	github?: string;
};

function ProjectLinks(props: Props): JSX.Element {
	const { link, website, github } = props;
	const iconStyle = { fontSize: 28 };
	if (!link && !github && !website) {
		return <></>;
	}
	return (
		<div>
			{/* <h3 className="text-2xl font-semibold">Important Links</h3> */}
			{/* <hr className="h-0.5 my-2 bg-accent border-none" /> */}
			<div className="flex flex-wrap items-center justify-center">
				{(website || link) && (
					<SocialBadge
						link={website || link}
						icon={<BiGlobe style={iconStyle} />}
					/>
				)}
				{github && (
					<SocialBadge
						link={github || link}
						icon={<SiGithub style={iconStyle} />}
					/>
				)}
			</div>
		</div>
	);
}

export default ProjectLinks;
