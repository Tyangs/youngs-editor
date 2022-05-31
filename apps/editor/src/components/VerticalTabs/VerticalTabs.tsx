import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './VerticalTabs.module.scss';

interface TabData {
	tab: React.ReactNode;
	panel: React.ReactNode;
}

interface IVerticalTabsProps {
	tabData: TabData[];
}

const VerticalTabs = (props: IVerticalTabsProps) => {
	const { tabData } = props;
	const [isFold, setIsFold] = useState<boolean>(false);

	const togglePanelFold = () => setIsFold(isFold => !isFold);

	const panelCls = classNames(styles['panel'], {
		[styles['panel--fold']]: isFold,
	});

	return (
		<Tabs
			orientation="vertical"
			h="calc(100vh - 80px)"
			position="relative"
			className={styles['vertical-tabs']}
		>
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

			<TabPanels className={panelCls}>
				{tabData.map(item => (
					<TabPanel key={item.panel}>{!isFold && item.panel}</TabPanel>
				))}
			</TabPanels>
			<Box
				position="absolute"
				w="16px"
				h="50px"
				top="50%"
				right="-15px"
				transform="translateY(-50%)"
				cursor="pointer"
				className={styles['arrow']}
				onClick={togglePanelFold}
			/>
		</Tabs>
	);
};

export default VerticalTabs;
