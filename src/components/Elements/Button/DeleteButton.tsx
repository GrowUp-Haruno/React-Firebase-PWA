import { FC, memo, MouseEventHandler } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

import { PrimaryIconButton } from '../../Atoms/Button/PrimaryIconButton';

type PropsType = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDeleted: boolean;
};

export const DeleteButton: FC<PropsType> = memo(({ onClick, isDeleted }) => {
  return (
    <PrimaryIconButton
      colorScheme="red"
      ariaLabel={isDeleted ? 'Delete Cancel' : 'Delete'}
      icon={<DeleteIcon />}
      onClick={onClick}
      variant={isDeleted ? 'solid' : 'outline'}
    />
  );
});
