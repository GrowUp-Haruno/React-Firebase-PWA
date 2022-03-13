import { Input, InputProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

//Propsの型定義
type PropsType = {
  placeholder: InputProps['placeholder'];
  value: InputProps['value'];
  onChange: InputProps['onChange'];
};

export const PrimaryInputText: FC<PropsType> = memo(({ placeholder, value, onChange }) => {
  const { communicating } = useContext(CommunicatingContext);

  return (
    <Input disabled={communicating} placeholder={placeholder} value={value} onChange={onChange} />
  );
});
