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
			className="m-2 rounded-full flex">
			<Link href={props.link}>
				<a target="_blank" rel="noreferrer">
					<span className="a11y-hidden">{props.iconName}</span>
					<div className="p-2 text-center h-10 w-10 hover:text-accent hover:translate-x-2 transition duration-200">
						{props.icon}
					</div>
				</a>
			</Link>
		</motion.div>
	);
}
