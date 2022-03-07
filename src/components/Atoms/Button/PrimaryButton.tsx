import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

const PrimaryButton: FC<ButtonProps> = memo(
  ({ children, onClick, type, leftIcon, variant, isDisabled }) => {
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
      >
        {children}
      </Button>
    );
  }
);

export default PrimaryButton;
