import React from 'react';
import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';

import SocialBadge from './SocialBadge';
export default function SocialLinks(): JSX.Element {
	const iconStyle = { fontSize: 28 };
	const social = [
		{
			icon: <SiLinkedin style={iconStyle} />,
			link: 'https://www.linkedin.com/in/rohanj02/',
			iconName: 'Linkedin',
		},
		{
			icon: <SiGithub style={iconStyle} />,
			link: 'https://github.com/rohanj-02',
			iconName: 'Github',
		},
		{
			icon: <GrMail style={iconStyle} />,
			link: 'mailto:rohan.jain02@gmail.com',
			iconName: 'Email',
		},
		{
			icon: <SiInstagram style={iconStyle} />,
			link: 'https://www.instagram.com/rohanj_02/',
			iconName: 'Instagram',
		},
		{
			icon: <SiFacebook style={iconStyle} />,
			link: 'https://www.facebook.com/rohan.jain74',
			iconName: 'Facebook',
		},
	];
	return (
		<div className="flex">
			{social.map((elem, idx) => (
				<SocialBadge
					key={idx}
					link={elem.link}
					icon={elem.icon}
					iconName={elem.iconName}
				/>
			))}
		</div>
	);
}
