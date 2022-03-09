import { Divider, Stack } from '@chakra-ui/react';
import { FC, memo, useContext, useState } from 'react';
import { ChangeDisplayName } from './ChangeDisplayName';
import { ChangeAvatar } from './ChangeAvatar';
import { AuthContext } from '../../../providers/AuthProvider';

type PropType = {};

export const HeaderChangeProfile: FC<PropType> = memo(() => {
  // const { currentUser, changeUserProfile, changeUserProfileHandler } = useHeaderChangeUserName();
  const currentUser = useContext(AuthContext);

  const changeDisplayNameState = useState(
    currentUser && currentUser.displayName ? currentUser.displayName : ''
  );

  const [cropImage, setCropImage] = useState<string>('');
  
  // const [changePhotoURL, setChangePhotoURL] = useState(
  //   currentUser && currentUser.photoURL ? currentUser.photoURL : ''
  // );

  return (
    <>
      {currentUser ? (
        // {/* <Stack spacing={4} as="form" onSubmit={handleUploadFromBlob}> */}
        <Stack spacing={4} as="form" onSubmit={() => {}}>
          <Stack spacing={4}>
            <ChangeDisplayName changeDisplayNameState={changeDisplayNameState} />
            <Divider />
            <ChangeAvatar setCropImage={setCropImage} />
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
