import { Divider, Spacer, Stack } from '@chakra-ui/react';
import { FC, memo, MouseEventHandler, useCallback, useContext, useMemo, useState } from 'react';
import {
  getDownloadURL,
  ref as FirebaseStorageRef,
  UploadMetadata,
  uploadString,
} from 'firebase/storage';

import { ChangeDisplayName } from './ChangeDisplayName';
import { ChangeAvatar } from './ChangeAvatar';
import { AuthContext } from '../../../providers/AuthProvider';
import { UpdateButton } from '../../Elements/Button/UpdateButton';
import { avatarStorageUrl, storage } from '../../../service/firebase';
import { changeUserProfile } from '../../../service/firebaseAuthentication';

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

  // BlobからFirebase Storageへアップロード
  const updateUserProfileHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(
    async (event) => {
      event.preventDefault();
      try {
        if (currentUser) {
          const storageRef = FirebaseStorageRef(storage, `avatar/${currentUser.uid}`);
          const metadata: UploadMetadata = {
            cacheControl: 'public,max-age=3600,immutable',
          };

          // 画像を切り取っている
          if (cropImage !== '') {
            // Firebase Storageへ画像をアップロード
            await uploadString(storageRef, cropImage, 'data_url', metadata);

            // アップロードした画像のURLで必要な部分を抜き出し
            const resultPhotoURL = (await getDownloadURL(storageRef)).replace(
              `${avatarStorageUrl}${currentUser.uid}?alt=media&token=`,
              ''
            );

            // Firebase Authenticationのユーザー情報を更新
            await changeUserProfile(currentUser, {
              displayName: changeDisplayName,
              photoURL: resultPhotoURL,
            });
          }
          // 画像を切り取っていない(displayNameだけ更新)
          else {
            await changeUserProfile(currentUser, {
              displayName: changeDisplayName,
              photoURL: currentUser.photoURL,
            });
          }

          // toast({
          //   title: '変更完了',
          //   description: 'プロフィールの変更が完了しました！',
          //   status: 'success',
          //   position: 'top',
          //   duration: 5000,
          //   isClosable: true,
          // });
        }
      } catch (error) {
        // if (error instanceof FirebaseError) {
        //   if (FirebaseErrors[`${error.code}`] !== undefined) {
        //     // Firebaseの非同期APIのエラーを表示
        //     toast({
        //       title: FirebaseErrors[`${error.code}`].title,
        //       description: FirebaseErrors[`${error.code}`].description,
        //       status: 'error',
        //       position: 'top',
        //       duration: 9000,
        //       isClosable: true,
        //     });
        //   } else {
        //     toast({
        //       title: '予期しないエラー',
        //       description: '予期しないエラーが発生しました',
        //       status: 'error',
        //       position: 'top',
        //       duration: 9000,
        //       isClosable: true,
        //     });
        //   }
        // } else {
        //   // その他の非同期関数のエラー表示
        //   console.log(error);
        // }
      } finally {
        // setButtonState(false);
      }
    },
    [changeDisplayName, cropImage, currentUser]
  );

  return (
    <Stack spacing={4}>
      <ChangeDisplayName
        changeDisplayName={changeDisplayName}
        setChangeDisplayName={setChangeDisplayName}
      />
      <Spacer />
      <ChangeAvatar setCropImage={setCropImage} />
      <Divider />
      <UpdateButton isDisabled={updateFlag} onClick={updateUserProfileHandler} />
    </Stack>
  );
});
