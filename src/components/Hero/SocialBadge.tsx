import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BadgeProps {
	link: string;
	iconName: string;
	icon: any;
}

export default function SocialBadge(props: BadgeProps): JSX.Element {
	return (
		<motion.div
			whileHover={{
				y: '-0.25rem',
				transition: { duration: 0.2 },
			}}
			className="m-2 rounded-full flex"
		>
			<Link
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="p-2 text-center h-10 w-10 hover:text-accent transition duration-200"
			>
				<span className="a11y-hidden">{props.iconName}</span>
				{props.icon}
			</Link>
		</motion.div>
	);
}
