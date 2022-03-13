import { Dispatch, SetStateAction, useCallback, useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

export const useChangeDisplayName = (setChangeDisplayName: Dispatch<SetStateAction<string>>) => {
  const currentUser = useContext(AuthContext);
  const displayName = currentUser && currentUser.displayName ? currentUser.displayName : '';

  const changeUserProfileHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setChangeDisplayName(event.target.value);
    },
    [setChangeDisplayName]
  );

  return { displayName, changeUserProfileHandler };
};
