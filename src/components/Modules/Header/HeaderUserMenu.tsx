import { FC, memo, useContext } from 'react';
import { Menu, MenuButton, MenuItem } from '@chakra-ui/menu';
import { Button, HStack, MenuDivider, MenuList, useDisclosure } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { AuthContext } from '../../../providers/AuthProvider';
// import { AddIcon } from '@chakra-ui/icons';
// import { useFirebase } from './hooks/useFirebase';
// import { auth, avatarStorageUrl } from '../../firebase';
// import PrimaryModal from '../Elements/PrimaryModal';
// import { ChangeProfile } from './ChangeProfile';
// import { User } from 'firebase/auth';

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
                <Avatar
                  size="md"
                  src={
                    undefined
                    // auth.currentUser!.photoURL
                    //   ? `${avatarStorageUrl}${auth.currentUser!.uid}?alt=media&token=${
                    //       auth.currentUser!.photoURL
                    //     }`
                    //   : undefined
                  }
                  // icon={<AddIcon />}
                  // icon={auth.currentUser?.photoURL ? <></> : <AddIcon />}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  Signed in as <br />
                  {currentUser.displayName}
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={onOpen}>プロフィール変更</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => {}}>サインアウト</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* <PrimaryModal isOpen={isOpen} onClose={onClose} modalTitle={'ユーザー情報の更新'} size="md">
          <ChangeProfile signInUser={signInUser} />
        </PrimaryModal> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
});
