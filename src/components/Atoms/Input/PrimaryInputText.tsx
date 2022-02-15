import { FC,  InputHTMLAttributes } from 'react';

//Propsの型定義
type PropsType = {} & InputHTMLAttributes<HTMLInputElement>;

const PrimaryInputText: FC<PropsType> = ({ ...attr }) => {
  return <input {...attr} />;
};

export default PrimaryInputText;
