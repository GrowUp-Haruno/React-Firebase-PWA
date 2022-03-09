import { ChangeEvent,  useCallback, useContext, useState } from 'react';

import { ChangeUserProfileTypes } from '../../../../models/changeUserType';
import { PicKey } from '../../../../models/UtilityType';
import { AuthContext } from '../../../../providers/AuthProvider';



export const useHeaderChangeUserName = () => {
  const currentUser = useContext(AuthContext);

  const [changeUserProfile, setchangeUserProfile] = useState<ChangeUserProfileTypes>({
    displayName: currentUser?.displayName ? currentUser?.displayName : '',
    photoURL: currentUser?.photoURL ? currentUser?.photoURL : '',
  });

  const changeUserProfileHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>, changeKey: PicKey<ChangeUserProfileTypes, string>) => {
      setchangeUserProfile({ ...changeUserProfile, [changeKey]: event.target.value });
      console.log('called');
    },
    [changeUserProfile]
  );

  return {
    currentUser,
    changeUserProfile,
    changeUserProfileHandler,
  };
};
