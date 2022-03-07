import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

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
    const { nowBatchCommit } = useContext(NowBatchCommitContext);

    return (
      <IconButton
        size="sm"
        isDisabled={nowBatchCommit}
        colorScheme={colorScheme}
        icon={icon}
        onClick={onClick}
        aria-label={ariaLabel}
        variant={variant}
      />
    );
  }
);
