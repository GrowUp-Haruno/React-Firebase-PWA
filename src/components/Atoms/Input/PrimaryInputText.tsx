import { Input, InputProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

//Propsの型定義
type PropsType = {
  placeholder: InputProps['placeholder'];
  value: InputProps['value'];
  onChange: InputProps['onChange'];
};

export const PrimaryInputText: FC<PropsType> = memo(({ placeholder, value, onChange }) => {
  const { nowBatchCommit } = useContext(NowBatchCommitContext);

  return (
    <Input disabled={nowBatchCommit} placeholder={placeholder} value={value} onChange={onChange} />
  );
});
