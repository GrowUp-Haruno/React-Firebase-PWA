import { FC, memo } from 'react';
import { PrimaryButton } from '../../Atoms/Button/PrimaryButton';

//Propsの型定義
type PropsType = {
  onClose: () => void;
};

/**
 * 閉じるボタン
 * @arg onClose - useDisclosureのonCloseを指定してください
 */
export const CloseButton: FC<PropsType> = memo(({ onClose }) => {
  return <PrimaryButton onClick={onClose}>閉じる</PrimaryButton>;
});
