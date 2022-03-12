import { FC, memo, useContext } from 'react';
import { Menu, MenuItem } from '@chakra-ui/menu';
import { HStack, MenuDivider, MenuList, useDisclosure } from '@chakra-ui/react';

import { AuthContext } from '../../../providers/AuthProvider';
import { logout } from '../../../service/firebaseAuthentication';
import { ChangeProfileForm } from './ChangeProfileForm';
import { MediumModal } from '../../Elements/Modal/MediumModal';
import { MyAvatarMenuButton } from '../../Elements/Menu/MyAvatarMenuButton';

export const UserMenu: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = useContext(AuthContext);
  const displayName = currentUser && currentUser.displayName ? currentUser.displayName : '';

  return (
    <HStack pr="4">
      <Menu>
        <MyAvatarMenuButton />
        <MenuList>
          <MenuItem>
            Signed in as <br />
            {displayName}
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={onOpen}>プロフィール変更</MenuItem>
          <MenuDivider />
          <MenuItem onClick={logout}>サインアウト</MenuItem>
        </MenuList>
      </Menu>

      <MediumModal isOpen={isOpen} onClose={onClose} modalTitle={'ユーザー情報の更新'}>
        <ChangeProfileForm />
      </MediumModal>
    </HStack>
  );
});
