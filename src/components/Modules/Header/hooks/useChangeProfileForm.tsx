import { useToast } from '@chakra-ui/react';
import { FirebaseError } from 'firebase/app';
import { MouseEventHandler, useCallback, useContext, useMemo, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { changeUserProfile } from '../../../../service/firebaseAuthentication';
import { firebaseErrors } from '../../../../service/firebaseErrors';
import { uploadImage } from '../../../../service/firebaseStorage';

export const useChangeProfileForm = () => {
  const currentUser = useContext(AuthContext);

  const [changeDisplayName, setChangeDisplayName] = useState(
    currentUser && currentUser.displayName ? currentUser.displayName : ''
  );

  const [cropImage, setCropImage] = useState<string>('');

  //  各種メッセージの表示コンポーネント
  const toast = useToast({ position: 'top', duration: 5000, isClosable: true });

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
          // 画像を切り取っている
          if (cropImage !== '') {
            const resultPhotoURL = await uploadImage(currentUser, cropImage);

            // Firebase Authenticationのユーザー情報を更新
            await changeUserProfile(currentUser, {
              displayName: changeDisplayName,
              photoURL: resultPhotoURL,
            });
            // 切取り画像を初期化
            setCropImage('');
          }
          // 画像を切り取っていない(displayNameだけ更新)
          else {
            await changeUserProfile(currentUser, {
              displayName: changeDisplayName,
              photoURL: currentUser.photoURL,
            });
          }

          // 完了メッセージを表示
          toast({
            title: '変更完了',
            description: 'プロフィールの変更が完了しました！',
            status: 'success',
          });
        }
      } catch (error) {
        if (error instanceof FirebaseError) {
          // エラーメッセージを表示
          if (firebaseErrors[`${error.code}`] !== undefined) {
            // Firebaseの非同期APIのエラーを表示
            toast({
              title: firebaseErrors[`${error.code}`].title,
              description: firebaseErrors[`${error.code}`].description,
              status: 'error',
            });
          } else {
            // firebaseErrorsに登録されていないエラーコードが入っていた場合
            toast({
              title: '予期しないエラー',
              description: `予期しないエラーが発生しました:${error.code}`,
              status: 'error',
            });
          }
        } else {
          // その他の非同期関数のエラー表示
          console.log(error);
        }
      } finally {
        // setButtonState(false);
      }
    },
    [changeDisplayName, cropImage, currentUser, toast]
  );

  return {
    changeDisplayName,
    updateFlag,
    setChangeDisplayName,
    setCropImage,
    updateUserProfileHandler,
  };
};
