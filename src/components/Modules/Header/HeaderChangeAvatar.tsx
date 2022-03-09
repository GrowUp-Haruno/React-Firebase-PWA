import { Box, Button, FormLabel, HStack, Input, Stack } from '@chakra-ui/react';
import { ChangeEventHandler, FC, useCallback, useContext, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { AuthContext } from '../../../providers/AuthProvider';
import { MyAvatar } from '../../Elements/Avatar/MyAvatar';

// 切り取り範囲の幅と高さ
const cropSize = 96;

const toDataUrlQuality = 0.6;

// 切り取り設定の初期値
const cropInitial: Crop = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  aspect: 1,
  unit: '%',
};

export const HeaderChangeAvatar: FC = () => {
  const currentUser = useContext(AuthContext);

  //  ローカルイメージファイルの読み取り結果(DataUrl(base64))
  const [imgSrc, setImgSrc] = useState<string>('');
  const [image, setImage] = useState<HTMLImageElement>();
  const [cropImage, setCropImage] = useState<string>('');
  // 切り取りの各種設定
  const [crop, setCrop] = useState<Crop>(cropInitial);

  /**
   * 画像読込InputのonChange用ハンドラ
   * - [ファイルを選択]でファイルを選択した際に発火する
   * - DataUrl(base64)が読み込まれると、ImgSrcステートにセットする
   * - 同時にcropステートを初期化する
   */
  const loadImageHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const reader = new FileReader();
    const file = event.target.files![0];

    reader.onload = (ev: ProgressEvent<FileReader>) => {
      if (ev.target?.result) {
        setCrop(cropInitial);
        setImgSrc(ev.target.result.toString());
      }
    };
    reader.readAsDataURL(file);
  }, []);

  /**
   * ReactCropのonImageLoaded用ハンドラ
   * - 画像が読み込まれたときに発生するコールバックです
   * - 画像のDOM要素(newimage)を受け取りimageステートにセットします
   */
  const RcImageLoadedHandler = useCallback((newimage: HTMLImageElement) => {
    setImage(newimage);
  }, []);

  /**
   * ReactCropのonChange用ハンドラ
   * - クロップが変更されるたびに発生するコールバックです
   * - クロップ(newCrop)を受け取りcropステートにセットします
   */
  const RcChangeHandler = useCallback((newCrop: Crop) => setCrop(newCrop), []);

  /**
   * ReatCropのonDragEnd用ハンドラ
   * - ドラッグやリサイズの後、ユーザーがカーソルやタッチを離したときに発生するコールバックです
   * - 抜き出した範囲をDataURIに変換してCropImageステートにセットします
   */
  const RcDragEndHandler = useCallback(() => {
    if (image !== undefined) {
      try {
        // canvasを作成
        const canvas = document.createElement('canvas');

        // 画像の元のサイズとレンダリング時の表示サイズを基に尺度をセット
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        // 切り取り範囲の幅と高さをcanvasにセット
        canvas.width = cropSize;
        canvas.height = cropSize;

        // canvaに描画するためのコンテキストを取得してctxへセット
        const ctx = canvas.getContext('2d');

        // canvasに切り取った画像を描画
        ctx?.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          canvas.width,
          canvas.height
        );

        // canvasからbase64(DataURI)へ変換
        const base64Image = canvas.toDataURL('image/jpeg', toDataUrlQuality);
        setCropImage(base64Image);
      } catch (e) {
        console.log(`error: ${e}`);
      }
    }
  }, [crop.height, crop.width, crop.x, crop.y, image]);

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
};
