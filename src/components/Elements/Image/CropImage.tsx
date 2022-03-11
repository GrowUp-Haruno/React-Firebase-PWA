import { Box, Stack } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

//Propsの型定義
type PropsType = {
  imgSrc: string;
  crop: Crop;
  RcImageLoadedHandler: (newimage: HTMLImageElement) => void;
  RcChangeHandler: (newCrop: Crop) => void;
  RcDragEndHandler: () => void;
};

export const CropImage: FC<PropsType> = memo(
  ({ imgSrc, crop, RcImageLoadedHandler, RcChangeHandler, RcDragEndHandler }) => {
    const { communicating } = useContext(CommunicatingContext);

    return (
      <>
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
      </>
    );
  }
);
