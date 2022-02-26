import { FC } from 'react';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

//Propsの型定義
type PropsType = {
  updateFlag: boolean;
};

const TodoUpdate: FC<PropsType> = ({ updateFlag }) => {
  return (
    <div>
      {' '}
      {updateFlag && (
        <>
          <PrimaryButton>保存</PrimaryButton>
          
        </>
      )}
    </div>
  );
};

TodoUpdate.displayName = 'TodoUpdate';
export default TodoUpdate;
