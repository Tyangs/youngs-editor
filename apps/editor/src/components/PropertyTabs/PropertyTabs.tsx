import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './PropertyTabs.module.scss';

interface TabData {
	tab: React.ReactNode;
	panel: React.ReactNode;
}

interface IPropertyTabsProps {
	tabData: TabData[];
}

const PropertyTabs = (props: IPropertyTabsProps) => {
	const { tabData } = props;
	const [isFold, setIsFold] = useState<boolean>(false);
	const [panelActive, setPanelActive] = useState<boolean>(true);

	const togglePanelFold = () => {
		if (isFold) {
			setTimeout(() => {
				setPanelActive(true);
			}, 100);
		} else {
			setPanelActive(false);
		}
		setIsFold(isFold => !isFold);
	};

	const tabsCls = classNames(styles['property-tabs'], {
		[styles['property-tabs--fold']]: isFold,
	});

	return (
		<Tabs h="calc(100vh - 80px)" position="relative" className={tabsCls}>
			{panelActive && (
				<TabList borderRightColor={'gray.100'} borderRightWidth={1}>
					{tabData.map(item => (
						<Tab key={item.tab} _focus={{ boxShadow: 'none' }}>
							{item.tab}
						</Tab>
					))}
				</TabList>
			)}

			<TabPanels>
				{tabData.map(item => (
					<TabPanel key={item.panel}>{panelActive && item.panel}</TabPanel>
				))}
			</TabPanels>
			<Box
				position="absolute"
				w="16px"
				h="50px"
				top="50%"
				left="-15px"
				transform="translateY(-50%)"
				cursor="pointer"
				className={styles['arrow']}
				onClick={togglePanelFold}
			/>
		</Tabs>
	);
};

export default PropertyTabs;
