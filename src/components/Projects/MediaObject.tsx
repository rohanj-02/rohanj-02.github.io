import { isImagePath, isVideoPath, isDocsPath } from '@/lib/validation';
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
					{...(mediaProps as unknown as MotionProps)}
					className={className}
				/>
			) : isVideoPath(filePath) ? (
				<motion.video
					{...(mediaProps as unknown as MotionProps)}
					controls
					className={className}
				/>
			) : isDocsPath(filePath) ? (
				<motion.div
					{...(mediaProps as unknown as MotionProps)}
					className={`${className} bg-secondary flex flex-col items-center justify-center p-8 text-center`}
				>
					<h3 className="text-2xl font-semibold mb-4 text-primary">
						Document Preview
					</h3>
					<p className="mb-6  text-primary">
						This document needs to be opened externally to view its contents.
					</p>
					<div className="flex gap-4">
						<motion.a
							href={filePath}
							download
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
						>
							Download
						</motion.a>
						<motion.a
							href={filePath}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-primary text-accent px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
						>
							Open in New Tab
						</motion.a>
					</div>
				</motion.div>
			) : (
				<p></p>
			)}
		</div>
	);
}
