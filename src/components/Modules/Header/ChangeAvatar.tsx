import { Box, Button, FormLabel, HStack, Input, Stack } from '@chakra-ui/react';
import {  FC, memo,  useContext } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { AuthContext } from '../../../providers/AuthProvider';
import { MyAvatar } from '../../Elements/Avatar/MyAvatar';
import { useChangeAvatar } from './hooks/useChangeAvatar';

type PropsType = {
  setCropImage: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangeAvatar: FC<PropsType> = memo(({ setCropImage }) => {
  const currentUser = useContext(AuthContext);

  const {
    imgSrc,
    crop,
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

          <Button
            as="label"
            backgroundColor={'blue.300'}
            color={'gray.100'}
            type="submit"
            _hover={{ backgroundColor: 'blue.500' }}
            _loading={{ backgroundColor: 'green.500' }}
          >
            画像を選択
            <Input
              type="file"
              display="none"
              onChange={loadImageHandler}
              accept="image/png,image/jpeg"
              flex={1}
            />
          </Button>

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
