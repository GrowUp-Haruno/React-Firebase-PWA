import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

export const SecondaryButton: FC<ButtonProps> = memo(
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
