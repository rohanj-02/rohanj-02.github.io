import React from 'react';
import { useState } from 'react';
import { AnimatePresence, MotionProps } from 'framer-motion';
import { wrap } from 'popmotion';
import styles from './MediaCarousel.module.css';
import {
	BsCaretRightFill,
	BsCaretLeftFill,
	BsFullscreen,
} from 'react-icons/bs';
import MediaObject from './MediaObject';
import Modal from './Modal';

type Props = {
	images: string[];
	slug: string;
};

const fadeInDistance = 200;
const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? fadeInDistance : -fadeInDistance,
			opacity: 0,
		};
	},
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			x: direction < 0 ? fadeInDistance : -fadeInDistance,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

function ImageCarousel({ images, slug }: Props): JSX.Element {
	const [[page, direction], setPage] = useState([0, 0]);
	const [open, setOpen] = useState(false);
	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};
	const mediaProps = {
		className: styles.imageStyle + ' object-cover w-full min-h-64',
		key: page,
		src: images[imageIndex],
		alt: slug,
		custom: direction,
		variants: variants,
		initial: 'enter',
		animate: 'center',
		exit: 'exit',
		transition: {
			x: { type: 'spring', stiffness: 300, damping: 30 },
			opacity: { duration: 0.4 },
		},
		drag: 'x',
		dragConstraints: { left: 0, right: 0 },
		dragElastic: 1,
		onDragEnd: (e, { offset, velocity }) => {
			const swipe = swipePower(offset.x, velocity.x);

			if (swipe < -swipeConfidenceThreshold) {
				paginate(1);
			} else if (swipe > swipeConfidenceThreshold) {
				paginate(-1);
			}
		},
	};

	return (
		<>
			<Modal open={open} setOpen={setOpen}>
				<>fds</>
			</Modal>
			<div className={styles['example-container']}>
				<AnimatePresence initial={false} custom={direction} exitBeforeEnter>
					{/* {isImage(images[imageIndex]) ? (
					<motion.img {...((mediaProps as unknown) as MotionProps)} />
				) : (
					<motion.video
						{...((mediaProps as unknown) as MotionProps)}
						controls
					/>
				)} */}
					<MediaObject
						filePath={images[imageIndex]}
						mediaProps={(mediaProps as unknown) as MotionProps}
					/>
				</AnimatePresence>
				<div
					className={`${styles.next} bg-secondary text-primary w-10 h-10 rounded-full transition duration-200 shadow-lg hover:bg-primary hover:text-accent`}
					onClick={() => paginate(1)}>
					<BsCaretRightFill />
				</div>
				<div
					className={`${styles.prev} bg-secondary text-primary w-10 h-10 rounded-full transition duration-200 shadow-lg hover:bg-primary hover:text-accent`}
					onClick={() => paginate(-1)}>
					<BsCaretLeftFill />
				</div>
				<div
					className={`${styles.fullscreen} bg-secondary text-primary w-10 h-10 rounded-md transition duration-200 shadow-md hover:text-accent`}
					onClick={() => setOpen(true)}>
					<BsFullscreen style={{ opacity: 1 }} />
				</div>
			</div>
		</>
	);
}

export default ImageCarousel;
