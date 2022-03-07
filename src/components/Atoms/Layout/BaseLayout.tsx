import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
export const BaseLayout: FC<FlexProps> = ({ children, justify }) => {
  return (
    <Flex
      direction="column"
      h="100vh"
      align="center"
      justify={justify}
      bg={useColorModeValue('gray.200', 'gray.800')}
    >
      {children}
    </Flex>
  );
};
