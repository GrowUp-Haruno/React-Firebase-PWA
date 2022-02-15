import { DOMAttributes, FC } from 'react';

//Propsの型定義
type PropsType = {} & DOMAttributes<HTMLButtonElement>;

const PrimaryButton: FC<PropsType> = ({ children, ...attr }) => {
  return <button {...attr}>{children}</button>;
};

export default PrimaryButton;
