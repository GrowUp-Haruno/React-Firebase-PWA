import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

export const PrimaryCheckBox: FC<CheckboxProps> = memo(({ isChecked, onChange }) => {
  // バッチ処理中は押せなくする
  const { communicating } = useContext(CommunicatingContext);

  return (
    <Checkbox
      isDisabled={communicating}
      isChecked={isChecked}
      onChange={onChange}
      colorScheme="blue"
    />
  );
});