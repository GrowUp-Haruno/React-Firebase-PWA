import { FC } from 'react';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

//Propsの型定義
type PropsType = {
  updateFlag: boolean;
  todoUpdateHandler: () => void;
};

const TodoUpdate: FC<PropsType> = ({ updateFlag, todoUpdateHandler }) => {
  return (
    <div>
      {' '}
      {updateFlag && (
        <>
          <PrimaryButton onClick={todoUpdateHandler}>保存</PrimaryButton>
        </>
      )}
    </div>
  );
};

TodoUpdate.displayName = 'TodoUpdate';
export default TodoUpdate;
