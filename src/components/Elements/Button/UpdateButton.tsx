import { ButtonProps } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { SecondaryButton } from '../../Atoms/Button/SecondaryButton';

export const UpdateButton: FC<ButtonProps> = memo(({ isDisabled, onClick }) => {
  return (
    <SecondaryButton isDisabled={!isDisabled} onClick={onClick}>
      更新する
    </SecondaryButton>
  );
});
