import { Box, FormLabel, HStack, Stack } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { AuthContext } from '../../../providers/AuthProvider';
import { MyAvatar } from '../../Elements/Avatar/MyAvatar';
import { SelectImageButton } from '../../Elements/Button/SelectImageButton';
import { useChangeAvatar } from './hooks/useChangeAvatar';

type PropsType = {
  setCropImage: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangeAvatar: FC<PropsType> = memo(({ setCropImage }) => {
  const currentUser = useContext(AuthContext);

  const {
    imgSrc,
    crop,
    communicating,
    loadImageHandler,
    RcChangeHandler,
    RcDragEndHandler,
    RcImageLoadedHandler,
  } = useChangeAvatar(setCropImage);

  return (
    <>
      {currentUser ? (
        <Stack>
          <FormLabel>アバター設定</FormLabel>

          <SelectImageButton loadImageHandler={loadImageHandler} />

          <HStack>
            <Box color="gray.500" fontSize="sm">
              現在の設定：
            </Box>
            <MyAvatar />
          </HStack>

          {imgSrc && (
            <Stack>
              <ReactCrop
                src={imgSrc}
                crop={crop}
                circularCrop={true}
                onImageLoaded={RcImageLoadedHandler}
                onChange={RcChangeHandler}
                onDragEnd={RcDragEndHandler}
                disabled={communicating}
              />
              {crop.width === 0 && <Box>ドラッグ＆ドロップで範囲を指定してください</Box>}
            </Stack>
          )}
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
});
