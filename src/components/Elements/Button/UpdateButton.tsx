import { ButtonProps } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { PrimaryButton } from '../../Atoms/Button/PrimaryButton';

export const UpdateButton: FC<ButtonProps> = memo(({ isDisabled, onClick }) => {
  return (
    <PrimaryButton isDisabled={!isDisabled} onClick={onClick}>
      更新する
    </PrimaryButton>
  );
});
