import React from 'react';
import AnimateWhenVisible from './AnimateWhenVisible';

interface IProps {
	children?: React.ReactNode;
	resetAnimation?: boolean;
	classNames?: string;
}

export default function FadeInWhenVisible({
	children,
	resetAnimation,
	classNames = '',
}: IProps): JSX.Element {
	const variants = {
		visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
		hidden: { opacity: 0, scale: 0 },
	};
	return (
		<AnimateWhenVisible
			variants={variants}
			resetAnimation={resetAnimation}
			classNames={classNames}>
			{children}
		</AnimateWhenVisible>
	);
}
