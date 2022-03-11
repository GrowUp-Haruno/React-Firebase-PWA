import { useToast } from '@chakra-ui/react';
import { FirebaseError } from 'firebase/app';
import { MouseEventHandler, useCallback, useContext, useMemo, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { CommunicatingContext } from '../../../../providers/CommunicatingProvider';
import { changeUserProfile } from '../../../../service/firebaseAuthentication';
import { firebaseErrors } from '../../../../service/firebaseErrors';
import { uploadImage } from '../../../../service/firebaseStorage';

// 更新間隔[分]
const updateInterval: number = 1;

// 連続更新の制限回数
const numberOfLimits: number = 3;

const InitialLastUpdate = {
  count: 0,
  time: 0,
};

type lastUpdateType = { count: number; time: number };

export const useChangeProfileForm = () => {
  const currentUser = useContext(AuthContext);
  const { setCommunicating } = useContext(CommunicatingContext);

  const [changeDisplayName, setChangeDisplayName] = useState(
    currentUser && currentUser.displayName ? currentUser.displayName : ''
  );

  const [cropImage, setCropImage] = useState<string>('');

  const [lastUpdata, setlastUpdata] = useState<lastUpdateType>(InitialLastUpdate);
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

  /**
   * - Blob(cropImage)をFirebase Storageへアップロード
   * - ユーザー情報を更新
   */
  const updateUserProfileHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(
    async (event) => {
      event.preventDefault();
      setCommunicating(true);

      try {
        // 短時間の変更回数及び前回の更新時間を確認
        // 前回の更新から1分超過、または更新回数が1分未満の内に規定回数以下なら更新を許可する
        const nowTime = new Date().getTime();
        if (lastUpdata === InitialLastUpdate) {
          // プロフィール初変更
          setlastUpdata({ count: 1, time: nowTime });
        } else {
          if (
            lastUpdata.count < numberOfLimits ||
            lastUpdata.time + updateInterval * 60 * 1000 < nowTime
          ) {
            if (lastUpdata.time + updateInterval * 60 * 1000 < nowTime) {
              setlastUpdata({ count: 1, time: nowTime });
            } else {
              setlastUpdata({ count: lastUpdata.count + 1, time: nowTime });
            }
          } else {
            // 更新条件の規定値を超えた場合、FirebaseErrorを返す
            throw new FirebaseError('changeProfile-error', '');
          }
        }

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
        setCommunicating(false);
      }
    },
    [changeDisplayName, cropImage, currentUser, lastUpdata, setCommunicating, toast]
  );

  return {
    changeDisplayName,
    updateFlag,
    setChangeDisplayName,
    setCropImage,
    updateUserProfileHandler,
  };
};
