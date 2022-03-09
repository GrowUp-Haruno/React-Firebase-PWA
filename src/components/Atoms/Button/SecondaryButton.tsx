import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

type PropsType = {
  onClick?: ButtonProps['onClick'];
  type?: ButtonProps['type'];
  leftIcon?: ButtonProps['leftIcon'];
  variant?: ButtonProps['variant'];
  isDisabled?: ButtonProps['isDisabled'];
  loadingText?: ButtonProps['loadingText'];
};

export const SecondaryButton: FC<PropsType> = memo(
  ({ children, onClick, type, leftIcon, variant, isDisabled, loadingText }) => {
    const { nowBatchCommit } = useContext(NowBatchCommitContext);

    return (
      <Button
        isDisabled={isDisabled}
        isLoading={nowBatchCommit}
        onClick={onClick}
        type={type}
        colorScheme="green"
        w="full"
        variant={variant}
        leftIcon={leftIcon}
        loadingText={loadingText}
      >
        {children}
      </Button>
    );
  }
);
