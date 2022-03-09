import { Divider, Spacer, Stack } from '@chakra-ui/react';
import { FC, memo, useContext, useMemo, useState } from 'react';
import { ChangeDisplayName } from './ChangeDisplayName';
import { ChangeAvatar } from './ChangeAvatar';
import { AuthContext } from '../../../providers/AuthProvider';
import { UpdateButton } from '../../Elements/Button/UpdateButton';

type PropType = {};

export const ChangeProfileForm: FC<PropType> = memo(() => {
  const currentUser = useContext(AuthContext);

  const [changeDisplayName, setChangeDisplayName] = useState(
    currentUser && currentUser.displayName ? currentUser.displayName : ''
  );

  const [cropImage, setCropImage] = useState<string>('');

  /**
   * - false
   *    - ユーザー名が空の場合
   *    - ユーザー名が元のユーザー名の場合
   *    - 切取り画像が設定されていない場合
   * - ture
   *    - 新しいユーザー名の場合
   *    - 切取り画像が設定されている場合
   */
  const updateFlag = useMemo(() => {
    return (
      changeDisplayName !== '' &&
      (cropImage !== '' || changeDisplayName !== currentUser?.displayName)
    );
  }, [changeDisplayName, cropImage, currentUser?.displayName]);

  // const [changePhotoURL, setChangePhotoURL] = useState(
  //   currentUser && currentUser.photoURL ? currentUser.photoURL : ''
  // );

  return (
    <Stack spacing={4}>
      <ChangeDisplayName
        changeDisplayName={changeDisplayName}
        setChangeDisplayName={setChangeDisplayName}
      />
      <Spacer />
      <ChangeAvatar setCropImage={setCropImage} />
      <Divider />
      <UpdateButton
        isDisabled={updateFlag}
        onClick={() => {
          console.log('更新');
        }}
      />
    </Stack>
  );
});
