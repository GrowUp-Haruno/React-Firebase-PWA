import { FC, InputHTMLAttributes, memo } from 'react';

//Propsの型定義
type PropsType = {} & InputHTMLAttributes<HTMLInputElement>;

const PrimaryInputText: FC<PropsType> = memo(({ ...attr }) => {
  return <input {...attr} />;
});

export default PrimaryInputText;
