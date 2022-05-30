import { Box, Image } from '@chakra-ui/react';
import React from 'react';

interface IThumbnailProps {
	src: string;
	alt?: string;
}

const Thumbnail = (props: IThumbnailProps) => {
	const { src, alt } = props;

	return (
		<Box w="32" cursor="pointer">
			<Image src={src} alt={alt} />
		</Box>
	);
};

export default Thumbnail;
