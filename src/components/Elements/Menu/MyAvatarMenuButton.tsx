import { Avatar } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { PrimaryMenuButton } from '../../Atoms/Menu/PrimaryMenuButton';
import { MyAvatar } from '../Avatar/MyAvatar';

export const MyAvatarMenuButton: FC = memo(() => {
  return <PrimaryMenuButton as={Avatar} icon={<MyAvatar />} />;
});
