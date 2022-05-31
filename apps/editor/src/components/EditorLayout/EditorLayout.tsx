import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

interface IEditorLayoutProps {
	header: React.ReactNode;
	material: React.ReactNode;
	preview: React.ReactNode;
	property: React.ReactNode;
}

const EditorLayout = (props: IEditorLayoutProps) => {
	const { header, material, preview, property } = props;

	return (
		<VStack spacing={0}>
			<Box w="100%" h="72px" borderBottom="1px" borderColor="gray.200" bg="gray.100">
				{header}
			</Box>
			<HStack w="100%" h="calc(100vh - 80px)" alignItems="flex-start">
				<Box h="100%" boxShadow="2px 0 20px 0 rgb(0 0 0 / 10%)">
					{material}
				</Box>
				<Box flex="1" h="100%" bgColor={'gray.50'}>
					{preview}
				</Box>
				<Box h="100%" bg="blue.50" boxShadow="-2px 0 20px 0 rgb(0 0 0 / 10%)">
					{property}
				</Box>
			</HStack>
		</VStack>
	);
};

export default EditorLayout;
