import { Divider, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { ChangeDisplayName } from './ChangeDisplayName';
import { ChangeAvatar } from './ChangeAvatar';
import { UpdateButton } from '../../Elements/Button/UpdateButton';
import { useChangeProfileForm } from './hooks/useChangeProfileForm';

export const ChangeProfileForm: FC = memo(() => {
  const {
    changeDisplayName,
    updateFlag,
    setChangeDisplayName,
    setCropImage,
    updateUserProfileHandler,
  } = useChangeProfileForm();

  return (
    <Stack spacing={4}>
      <ChangeDisplayName
        changeDisplayName={changeDisplayName}
        setChangeDisplayName={setChangeDisplayName}
      />
      <ChangeAvatar setCropImage={setCropImage} />
      <Divider />
      <UpdateButton isDisabled={updateFlag} onClick={updateUserProfileHandler} />
    </Stack>
  );
});
