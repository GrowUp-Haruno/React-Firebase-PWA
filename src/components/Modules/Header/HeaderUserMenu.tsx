import { FC, memo, useContext } from 'react';
import { Menu, MenuButton, MenuItem } from '@chakra-ui/menu';
import { Button, HStack, MenuDivider, MenuList, useDisclosure } from '@chakra-ui/react';

import { AuthContext } from '../../../providers/AuthProvider';
import { logout } from '../../../service/firebaseAuthentication';
import { ChangeProfileForm } from './ChangeProfileForm';
import { MyAvatar } from '../../Elements/Avatar/MyAvatar';
import { MediumModal } from '../../Elements/Modal/MediumModal';

//Propsの型定義
type PropType = {};

export const HeaderUserMenu: FC<PropType> = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = useContext(AuthContext);

  return (
    <>
      {currentUser ? (
        <>
          <HStack pr="4">
            <Menu>
              <MenuButton as={Button} cursor={'pointer'} minW={0} rounded={'full'} variant={'link'}>
                <MyAvatar />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  Signed in as <br />
                  {currentUser.displayName}
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={onOpen}>プロフィール変更</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>サインアウト</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <MediumModal
            isOpen={isOpen}
            onClose={onClose}
            modalTitle={'ユーザー情報の更新'}
          >
            <ChangeProfileForm />
          </MediumModal>
        </>
      ) : (
        <></>
      )}
    </>
  );
});
