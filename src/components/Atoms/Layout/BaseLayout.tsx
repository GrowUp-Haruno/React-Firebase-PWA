import { FC, memo } from 'react';
import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';

export const BaseLayout: FC<FlexProps> = memo(({ children, justify }) => {
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
});
