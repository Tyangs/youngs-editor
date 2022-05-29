import React from 'react';

import EditorLayout from '@/components/EditorLayout';

import Header from './components/Header';
import Material from './components/Material';
import Preview from './components/Preview';
import Property from './components/Property';

const Editor = () => {
	return (
		<EditorLayout
			header={<Header />}
			material={<Material />}
			preview={<Preview />}
			property={<Property />}
		/>
	);
};

export default Editor;
