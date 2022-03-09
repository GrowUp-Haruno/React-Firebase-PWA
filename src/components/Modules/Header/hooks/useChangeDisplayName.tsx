import { useCallback } from 'react';

export const useChangeDisplayName = (
  setChangeDisplayName: React.Dispatch<React.SetStateAction<string>>
) => {
  const changeUserProfileHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setChangeDisplayName(event.target.value);
    },
    [setChangeDisplayName]
  );

  return { changeUserProfileHandler };
};
