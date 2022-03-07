import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

const PrimaryButton: FC<ButtonProps> = memo(({ children, onClick, type, leftIcon, variant }) => {
  const { nowBatchCommit } = useContext(NowBatchCommitContext);

  return (
    <Button
      disabled={nowBatchCommit}
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
});

export default PrimaryButton;
