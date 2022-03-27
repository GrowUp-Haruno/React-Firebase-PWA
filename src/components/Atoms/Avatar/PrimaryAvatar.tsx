import { Avatar, AvatarProps } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { avatarStorageUrl } from '../../../service/firebase';

//Propsの型定義
type PropsType = {
  uid: string;
  photoURL: string;
  icon: AvatarProps['icon'];
};

/**
 * アバターをレンダリングします
 * @example <PrimaryAvatar uid={currentUser.uid} photoURL={currentUser.uid} icon={<AddIcon/>} />
 * @argument { uid } uid: string - ユーザーID
 * @argument { photoURL } photoURL: string - アバター画像のURL
 * @argument { icon } icon: AvatarProps['icon'] - アバター画像が登録されていない場合の代替アイコン(@chakra-ui/icons推奨)
 * - photoURLにGoogleアカウントのアバター画像のURL(https://lh3.googleusercontent.com/)含まれている場合は、Avatarデフォルト
 */
export const PrimaryAvatar: FC<PropsType> = memo(({ uid, photoURL, icon }) => {
  return (
    <Avatar
      size="md"
      src={
        photoURL
          ? // photoURLがGoogleアカウントのアバター画像URL(https://lh3.googleusercontent.com/)の場合、
            photoURL.indexOf('https://lh3.googleusercontent.com/') === 0
            ? // 設定したiconを表示
              undefined
            : // そうでない場合は、ユーザー設定のアバター画像を表示
              `${avatarStorageUrl}${uid}?alt=media&token=${photoURL}`
          : // どれにも当てはまらない場合設定したiconを表示
            undefined
      }
      icon={icon}
      data-testid='PrimaryAvatar'
    />
  );
});
