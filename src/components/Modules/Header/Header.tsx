import { Box, HStack, Spacer, StackProps } from '@chakra-ui/react';
// import { User } from '@firebase/auth';
import { FC, memo } from 'react';
// import UserMenu from './UserMenu';

type PropsType = {
  height?: StackProps['height'];
};

export const Header: FC<PropsType> = memo(({ height = 5 }) => {
  return (
    <HStack height={height} spacing="4">
      <Box p="4" fontSize="lg">
        Fire Todo
      </Box>
      <Spacer />
      {/* <UserMenu signInUser={signInUser} /> */}
    </HStack>
  );
});
