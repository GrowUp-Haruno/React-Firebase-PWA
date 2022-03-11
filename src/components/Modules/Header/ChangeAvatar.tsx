import { Box, FormLabel, HStack, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { MyAvatar } from '../../Elements/Avatar/MyAvatar';
import { ImageSelectButton } from '../../Elements/Button/ImageSelectButton';
import { CropImage } from '../../Elements/Image/CropImage';
import { useChangeAvatar } from './hooks/useChangeAvatar';

type PropsType = {
  setCropImage: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangeAvatar: FC<PropsType> = memo(({ setCropImage }) => {
  const {
    imgSrc,
    crop,
    loadImageHandler,
    RcChangeHandler,
    RcDragEndHandler,
    RcImageLoadedHandler,
  } = useChangeAvatar(setCropImage);

  return (
    <Stack spacing={4}>
      <FormLabel>アバター設定</FormLabel>
      <ImageSelectButton loadImageHandler={loadImageHandler} />
      <HStack>
        <Box color="gray.500" fontSize="sm">
          現在の設定：
        </Box>
        <MyAvatar />
      </HStack>
      <CropImage
        imgSrc={imgSrc}
        crop={crop}
        RcImageLoadedHandler={RcImageLoadedHandler}
        RcChangeHandler={RcChangeHandler}
        RcDragEndHandler={RcDragEndHandler}
      />
    </Stack>
  );
});
