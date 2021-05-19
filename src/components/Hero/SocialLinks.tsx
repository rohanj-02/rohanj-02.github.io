import React from 'react';
// import { Facebook, Instagram, GitHub, Linkedin } from 'react-feather';
import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import SocialBadge from './SocialBadge';
export default function SocialLinks(): JSX.Element {
	const iconStyle = { fontSize: 28 };
	const social = [
		{
			icon: <SiLinkedin style={iconStyle} />,
			link: 'https://www.linkedin.com/in/rohanj02/',
		},
		{
			icon: <SiGithub style={iconStyle} />,
			link: 'https://github.com/rohanj-02',
		},
		{
			icon: <SiFacebook style={iconStyle} />,
			link: '/',
		},
		{
			icon: <SiInstagram style={iconStyle} />,
			link: '/',
		},
	];
	return (
		<div className="flex">
			{social.map((elem, idx) => (
				<SocialBadge key={idx} link={elem.link} icon={elem.icon} />
			))}
		</div>
	);
}
