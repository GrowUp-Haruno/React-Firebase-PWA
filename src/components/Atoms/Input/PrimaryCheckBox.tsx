import { FC, InputHTMLAttributes, memo } from 'react';

//Propsの型定義
type PropsType = {} & InputHTMLAttributes<HTMLInputElement>;

const PrimaryCheckBox: FC<PropsType> = memo(({ ...attr }) => {
  return <input {...attr} type='checkbox' />;
});

export default PrimaryCheckBox;
