import { Box } from '@chakra-ui/react';
import React from 'react';

import Image from '@/assets/thumbnail/image.svg';
import VerticalTabs from '@/components/MaterialVerticalTabs';
import Thumbnail from '@/components/Thumbnail';

const tabData = [
	{
		tab: '组件',
		panel: '组件',
	},
	{
		tab: '大纲',
		panel: '大纲',
	},
	{
		tab: '代码',
		panel: '代码',
	},
];

const Material = () => {
	return (
		<Box>
			<VerticalTabs tabData={tabData} />
			{/* <Thumbnail src={Image} /> */}
		</Box>
	);
};

export default Material;
