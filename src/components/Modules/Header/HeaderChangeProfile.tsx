import { Divider, FormControl, FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { PrimaryInputText } from '../../Atoms/Input/PrimaryInputText';
import { HeaderChangeAvatar } from './HeaderChangeAvatar';
import { useHeaderChangeUserName } from './hooks/useHeaderChangeUserName';

type PropType = {};

export const HeaderChangeProfile: FC<PropType> = memo(() => {
  const { currentUser, changeUserProfile, changeUserProfileHandler } = useHeaderChangeUserName();

  return (
    <>
      {currentUser ? (
        // {/* <Stack spacing={4} as="form" onSubmit={handleUploadFromBlob}> */}
        <Stack spacing={4} as="form" onSubmit={() => {}}>
          <Stack spacing={4}>
            <FormControl key="displayName">
              <FormLabel>ユーザー名</FormLabel>
              <PrimaryInputText
                placeholder="ユーザー名"
                key={1}
                value={changeUserProfile.displayName}
                onChange={(event) => {
                  changeUserProfileHandler(event, 'displayName');
                }}
              />
              <FormHelperText>現在の設定： {currentUser.displayName}</FormHelperText>
            </FormControl>
            <Divider />
            <HeaderChangeAvatar />
          </Stack>
          <Divider />
          {/* <UpdateButton onClick={buttonState} /> */}
          {/* <SendButton buttonName="変更を確定" buttonState={buttonState} /> */}
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
});
