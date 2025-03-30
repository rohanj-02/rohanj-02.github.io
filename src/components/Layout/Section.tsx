import React from 'react';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';

interface SectionProps {
	children?: React.ReactNode;
	title?: string;
	id: string;
	inverted?: boolean;
	resetAnimation?: boolean;
}

export default function Section({
	children,
	title = '',
	id,
	inverted = false,
	resetAnimation,
}: SectionProps): JSX.Element {
	const sectionClassNames = `${
		inverted ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
	} flex flex-col items-center justify-center p-5 pt-10 flex-1`;
	return (
		<section
			id={id || 'invalid'}
			style={{ scrollMarginTop: '5rem' }}
			className={sectionClassNames}
		>
			<FadeInWhenVisible resetAnimation={resetAnimation}>
				{title && (
					<div className="mx-4 mt-16 mb-8 p-4">
						<h1 className="font-semibold text-4xl text-center">{title}</h1>
					</div>
				)}
			</FadeInWhenVisible>
			<div className="max-w-4xl flex flex-col sm:flex-row mx-4 px-4 mb-16 pb-5">
				{children}
			</div>
		</section>
	);
}
