import { DetailedHTMLProps, FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

//Propsの型定義
type PropsType = {} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PrimaryButton: FC<PropsType> = memo(({ children, ...attr }) => {
  const { nowBatchCommit } = useContext(NowBatchCommitContext);
  
  return (
    <button {...attr} disabled={nowBatchCommit}>
      {children}
    </button>
  );
});

export default PrimaryButton;
