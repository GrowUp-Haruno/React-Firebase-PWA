import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

export const BaseLayout: FC = ({ children }) => {
  const currentUser = useContext(AuthContext);
  return (
    <Flex
      direction="column"
      h={currentUser ? '200vh-60px' : '100vh'}
      align="center"
      justify="center"
      bg={useColorModeValue('gray.200', 'gray.800')}
    >
      {children}
    </Flex>
  );
};
