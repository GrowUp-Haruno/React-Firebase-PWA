import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

export const PrimaryButton: FC<ButtonProps> = memo(
  ({ children, onClick, type, leftIcon, variant, isDisabled, loadingText }) => {
    const { nowBatchCommit } = useContext(NowBatchCommitContext);

    return (
      <Button
        isDisabled={isDisabled}
        isLoading={nowBatchCommit}
        onClick={onClick}
        type={type}
        colorScheme="blue"
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
