import { isImagePath } from '@/lib/validation';
import { MotionProps, motion } from 'framer-motion';
import React from 'react';

interface Props {
	mediaProps: MotionProps;
	filePath: string;
	objectFit: string;
}

export default function MediaObject({
	mediaProps,
	filePath,
	objectFit,
}: Props): JSX.Element {
	const className = `${
		objectFit == 'cover' ? 'object-cover' : 'object-contain'
	} w-full min-h-64 h-full`;

	return (
		<div className="min-h-64 h-full">
			{isImagePath(filePath) ? (
				<motion.img
					{...((mediaProps as unknown) as MotionProps)}
					className={className}
				/>
			) : (
				<motion.video
					{...((mediaProps as unknown) as MotionProps)}
					controls
					className={className}
				/>
			)}
		</div>
	);
}
