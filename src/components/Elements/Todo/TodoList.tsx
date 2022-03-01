import { FC } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
// import PrimaryButton from '../../Atoms/Button/PrimaryButton';

type propsType = {
  todos: todoGetDataType[] | undefined;
  checkBoxChangeHandler: (index: number, changeKey: PicKey<todoGetDataType,boolean>) => void;
};

const TodoList: FC<propsType> = ({ todos, checkBoxChangeHandler }) => {
  const list =
    todos &&
    todos.map((todo, index) => (
      <ul key={index}>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            checkBoxChangeHandler(index,'isCompleted');
          }}
        />
        {/* <span>{todo.task}</span>
        <PrimaryButton onClick={() => {}}>削除</PrimaryButton> */}
      </ul>
    ));

  return (
    <div>
      <li>{list}</li>
    </div>
  );
};

export default TodoList;
