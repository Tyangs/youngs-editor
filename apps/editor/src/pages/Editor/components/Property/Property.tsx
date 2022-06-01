import React from 'react';

import PropertyTabs from '@/components/PropertyTabs';

const tabData = [
	{
		tab: '常规',
		panel: '常规',
	},
	{
		tab: '接口',
		panel: '接口',
	},
	{
		tab: '外观',
		panel: '外观',
	},
	{
		tab: '其他',
		panel: '其他',
	},
];

const Property = () => {
	return (
		<div>
			<PropertyTabs tabData={tabData} />
		</div>
	);
};

export default Property;
