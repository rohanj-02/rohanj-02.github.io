import React from 'react';

type Props = {
	images: string[];
	slug: string;
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import styles from './ImageCarousel.module.css';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 500 : -500,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 500 : -500,
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

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<div className={styles['example-container']}>
			<AnimatePresence initial={false} custom={direction} exitBeforeEnter>
				<motion.img
					className={styles.imageStyle}
					key={page}
					src={images[imageIndex]}
					alt={slug}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				/>
			</AnimatePresence>
			<div
				className={`${styles.next} bg-secondary text-primary w-10 h-10 rounded-full transition duration-200 shadow-2xl hover:bg-primary hover:text-accent`}
				onClick={() => paginate(1)}>
				<BsCaretRightFill />
			</div>
			<div
				className={`${styles.prev} bg-secondary text-primary w-10 h-10 rounded-full transition duration-200 shadow-2xl hover:bg-primary hover:text-accent`}
				onClick={() => paginate(-1)}>
				<BsCaretLeftFill />
			</div>
		</div>
	);
}

export default ImageCarousel;
