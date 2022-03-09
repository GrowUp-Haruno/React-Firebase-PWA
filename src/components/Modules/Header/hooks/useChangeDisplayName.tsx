import { Dispatch, SetStateAction, useCallback } from 'react';

export const useChangeDisplayName = (setChangeDisplayName: Dispatch<SetStateAction<string>>) => {
  const changeUserProfileHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setChangeDisplayName(event.target.value);
    },
    [setChangeDisplayName]
  );

  return { changeUserProfileHandler };
};
