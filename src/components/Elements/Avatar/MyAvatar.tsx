import { AddIcon } from '@chakra-ui/icons';
import { FC, useContext } from 'react';

import { AuthContext } from '../../../providers/AuthProvider';
import { PrimaryAvatar } from '../../Atoms/Avatar/PrimaryAvatar';

/**
 * 自アカウントのアバターをレンダリングします
 */
export const MyAvatar: FC = () => {
  const currentUser = useContext(AuthContext);

  if (currentUser && currentUser.photoURL) {
  }
  return (
    <>
      {currentUser && currentUser.photoURL ? (
        <PrimaryAvatar uid={currentUser.uid} photoURL={currentUser.photoURL} icon={<AddIcon />} />
      ) : (
        <></>
      )}
    </>
  );
};
