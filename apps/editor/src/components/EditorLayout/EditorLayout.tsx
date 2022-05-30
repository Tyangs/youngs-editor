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
			{header}
			<HStack w="100%" h="calc(100vh - 80px)" alignItems="flex-start">
				<Box w="300px" h="100%" boxShadow="2px 0 20px 0 rgb(0 0 0 / 10%)">
					{material}
				</Box>
				<Box flex="1" h="100%">
					{preview}
				</Box>
				<Box w="200px" h="100%" bg="blue.50" boxShadow="-2px 0 20px 0 rgb(0 0 0 / 10%)">
					{property}
				</Box>
			</HStack>
		</VStack>
	);
};

export default EditorLayout;
