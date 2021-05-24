import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import MediaCarousel from './MediaCarousel';

type Props = {
	media: string[];
	slug: string;
};

function MediaCarouselWrapper({ media, slug }: Props): JSX.Element {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Modal open={open} setOpen={setOpen}>
				<MediaCarousel
					style={{ height: '60vh' }}
					objectFit="contain"
					showFullScreenButton={false}
					media={media}
					slug={slug}
				/>
			</Modal>
			<MediaCarousel
				objectFit="cover"
				showFullScreenButton={true}
				setOpen={setOpen}
				media={media}
				slug={slug}
			/>
		</>
	);
}

export default MediaCarouselWrapper;
