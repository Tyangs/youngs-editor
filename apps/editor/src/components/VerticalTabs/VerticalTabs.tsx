import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

interface TabData {
	tab: React.ReactNode;
	panel: React.ReactNode;
}

interface IVerticalTabsProps {
	tabData: TabData[];
}

const VerticalTabs = (props: IVerticalTabsProps) => {
	const { tabData } = props;
	return (
		<Tabs orientation="vertical" h="calc(100vh - 80px)">
			<TabList borderRightColor={'gray.100'} borderRightWidth={1}>
				{tabData.map(item => (
					<Tab
						key={item.tab}
						_selected={{
							bgColor: 'gray.50',
							boxShadow: 'none',
							borderLeftColor: 'gray.500',
							borderLeftWidth: '4px',
						}}
					>
						{item.tab}
					</Tab>
				))}
			</TabList>

			<TabPanels>
				{tabData.map(item => (
					<TabPanel key={item.panel}>{item.panel}</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
};

export default VerticalTabs;
