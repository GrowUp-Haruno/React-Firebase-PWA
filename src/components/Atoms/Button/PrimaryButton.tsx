import { Button } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

//Propsの型定義
type PropsType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
};
// type PropsType = {} & DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >;

const PrimaryButton: FC<PropsType> = memo(({ children, onClick, type }) => {
  const { nowBatchCommit } = useContext(NowBatchCommitContext);

  return (
    <Button disabled={nowBatchCommit} onClick={onClick} type={type} backgroundColor='blue.200'>
      {children}
    </Button>
  );
});

export default PrimaryButton;
