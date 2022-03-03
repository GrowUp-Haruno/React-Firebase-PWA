import { FC, InputHTMLAttributes, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

//Propsの型定義
type PropsType = {} & InputHTMLAttributes<HTMLInputElement>;

const PrimaryInputText: FC<PropsType> = memo(({ ...attr }) => {
  const { nowBatchCommit } = useContext(NowBatchCommitContext);
  
  return <input {...attr} disabled={nowBatchCommit} />;
});

export default PrimaryInputText;
