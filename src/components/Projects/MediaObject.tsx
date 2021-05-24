import { isImagePath } from '@/lib/validation';
import { MotionProps, motion } from 'framer-motion';
import React from 'react';

interface Props {
	mediaProps: MotionProps;
	filePath: string;
}

export default function MediaObject({
	mediaProps,
	filePath,
}: Props): JSX.Element {
	return (
		<div className="min-h-64">
			{isImagePath(filePath) ? (
				<motion.img {...((mediaProps as unknown) as MotionProps)} />
			) : (
				<motion.video {...((mediaProps as unknown) as MotionProps)} controls />
			)}
		</div>
	);
}
