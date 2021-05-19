import React from 'react';

type Props = {
	images: string[];
	slug: string;
};

function ImageCarousel(props: Props): JSX.Element {
	const { images, slug } = props;

	return (
		<div>
			<img src={images[0]} alt={slug} />
		</div>
	);
}

export default ImageCarousel;
