import { DetailedHTMLProps, FC, FormEventHandler, memo } from 'react';

//Propsの型定義
type PropsType = {} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PrimaryButton: FC<PropsType> = memo(({ children, ...attr }) => {
  return <button {...attr}>{children}</button>;
});

export default PrimaryButton;
