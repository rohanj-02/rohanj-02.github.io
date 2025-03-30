import React, { useEffect } from 'react';
import { useState } from 'react';
import { AnimatePresence, MotionProps, PanInfo } from 'framer-motion';
import { wrap } from 'popmotion';
import styles from './MediaCarousel.module.css';
import {
	BsCaretRightFill,
	BsCaretLeftFill,
	BsFullscreen,
} from 'react-icons/bs';
import MediaObject from './MediaObject';

type Props = {
	media: string[];
	slug: string;
	style?: React.CSSProperties;
	objectFit: string;
	showFullScreenButton?: boolean;
	setOpen?: (arg0: boolean) => void;
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

function MediaCarousel({
	media,
	slug,
	style = {},
	objectFit,
	showFullScreenButton = false,
	setOpen,
}: Props): JSX.Element {
	const [[page, direction], setPage] = useState([0, 0]);
	const mediaIndex = wrap(0, media.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};
	const mediaProps = {
		key: page,
		src: media[mediaIndex],
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
		onDragEnd: (
			_: MouseEvent | TouchEvent | PointerEvent,
			{ offset, velocity }: PanInfo
		) => {
			const swipe = swipePower(offset.x, velocity.x);

			if (swipe < -swipeConfidenceThreshold) {
				paginate(1);
			} else if (swipe > swipeConfidenceThreshold) {
				paginate(-1);
			}
		},
	};

	const handleArrowKeys = (e: KeyboardEvent): void => {
		if (e.key === 'ArrowRight') {
			paginate(1);
		}
		if (e.key === 'ArrowLeft') {
			paginate(-1);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleArrowKeys);
		return () => {
			document.removeEventListener('keydown', handleArrowKeys);
		};
	});

	return (
		<>
			<div className={styles['example-container']} style={style}>
				<AnimatePresence initial={false} custom={direction} mode="wait">
					<MediaObject
						objectFit={objectFit}
						filePath={media[mediaIndex]}
						mediaProps={mediaProps as unknown as MotionProps}
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
				{showFullScreenButton && setOpen && (
					<div
						className={`${styles.fullscreen} bg-secondary text-primary w-10 h-10 rounded-md transition duration-200 shadow-md hover:text-accent`}
						onClick={() => setOpen(true)}>
						<BsFullscreen style={{ opacity: 1 }} />
					</div>
				)}
			</div>
		</>
	);
}

export default MediaCarousel;
