import { Input } from '@chakra-ui/react';
import {ChangeEventHandler, FC, memo} from 'react'
import { PrimaryButton } from '../../Atoms/Button/PrimaryButton';

//Propsの型定義
type PropsType = {
  loadImageHandler: ChangeEventHandler<HTMLInputElement> ;
};

/**
 * 画像選択ウィンドを表示する
 */
export const SelectImageButton: FC<PropsType> = memo(({ loadImageHandler }) => {
  return (
    <PrimaryButton as="label">
      画像を選択
      <Input
        type="file"
        display="none"
        onChange={loadImageHandler}
        accept="image/png,image/jpeg"
        flex={1}
      />
    </PrimaryButton>
  );
});