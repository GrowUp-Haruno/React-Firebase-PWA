import { Divider, Spacer, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { ChangeDisplayName } from './ChangeDisplayName';
import { ChangeAvatar } from './ChangeAvatar';
import { UpdateButton } from '../../Elements/Button/UpdateButton';
import { useChangeProfileForm } from './hooks/useChangeProfileForm';

type PropType = {};

export const ChangeProfileForm: FC<PropType> = memo(() => {
  const {
    changeDisplayName,
    setChangeDisplayName,
    setCropImage,
    updateFlag,
    updateUserProfileHandler,
  } = useChangeProfileForm();

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
