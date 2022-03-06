import { Heading, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { GoogleLoginButton } from '../Elements/Button/GoogleLoginButton';
import Card from '../Elements/Card';

export const Login: FC = memo(() => {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'xl'} minW={'lg'} py={12} px={6}>
      <Heading fontSize="3xl" textAlign="center">
        🎉ToDoアプリへようこそ🎉
      </Heading>
      <Card>
        <GoogleLoginButton />
      </Card>
    </Stack>
  );
});
