import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
export const BaseLayout: FC = ({ children }) => {
  return (
    <Flex
      direction="column"
      h="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.200', 'gray.800')}
    >
      {children}
    </Flex>
  );
};
