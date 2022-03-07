import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';

export const PrimaryCheckBox: FC<CheckboxProps> = memo(({ isChecked, onChange }) => {
  // バッチ処理中は押せなくする
  const { nowBatchCommit } = useContext(NowBatchCommitContext);

  return (
    <Checkbox
      isDisabled={nowBatchCommit}
      isChecked={isChecked}
      onChange={onChange}
      colorScheme="blue"
    />
  );
});