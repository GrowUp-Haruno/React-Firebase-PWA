import { ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

export const UpdateButton: FC<ButtonProps> = ({ isDisabled, onClick }) => {
  return (
    <PrimaryButton isDisabled={!isDisabled} onClick={onClick}>
      更新する
    </PrimaryButton>
  );
};
