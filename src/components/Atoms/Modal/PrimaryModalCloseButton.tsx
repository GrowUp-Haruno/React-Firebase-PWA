import { CloseButtonProps, ModalCloseButton } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

type PropsType = {
  size: CloseButtonProps['size'];
};

export const PrimaryModalCloseButton: FC<PropsType> = memo(({ size = 'md' }) => {
  const { communicating } = useContext(CommunicatingContext);

  return <ModalCloseButton size={size} isDisabled={communicating} />;
});
