import React from 'react';

import { IImageProps } from './types';

function Image(props: IImageProps) {
	const { src } = props;

	return <img src={src} />;
}

export default Image;
