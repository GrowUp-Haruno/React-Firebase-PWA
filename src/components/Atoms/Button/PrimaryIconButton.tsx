import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

//Propsの型定義
type PropsType = {
  onClick: IconButtonProps['onClick'];
  variant: IconButtonProps['variant'];
  icon: IconButtonProps['icon'];
  colorScheme: IconButtonProps['colorScheme'];
  ariaLabel: IconButtonProps['aria-label'];
};

export const PrimaryIconButton: FC<PropsType> = memo(
  ({ onClick, variant, icon, colorScheme, ariaLabel }) => {
    const { communicating } = useContext(CommunicatingContext);

    return (
      <IconButton
        size="sm"
        isDisabled={communicating}
        colorScheme={colorScheme}
        icon={icon}
        onClick={onClick}
        aria-label={ariaLabel}
        variant={variant}
      />
    );
  }
);
