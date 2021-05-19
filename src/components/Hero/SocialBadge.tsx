import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BadgeProps {
	link: string;
	icon: any;
}

export default function SocialBadge(props: BadgeProps): JSX.Element {
	return (
		<motion.div
			whileHover={{
				y: '-0.25rem',
				transition: { duration: 0.2 },
			}}
			className="m-2 rounded-full flex shadow-lg">
			<Link href={props.link}>
				<a target="_blank" rel="noreferrer">
					<div className="p-2 text-center h-10 w-10 hover:text-accent hover:translate-x-1">
						{props.icon}
					</div>
				</a>
			</Link>
		</motion.div>
	);
}
