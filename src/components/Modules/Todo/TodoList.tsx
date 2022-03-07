import { FC } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
import { PrimaryCheckBox } from '../../Atoms/Input/PrimaryCheckBox';
import { DeleteButton } from '../../Elements/Button/DeleteButton';

type propsType = {
  todos: todoGetDataType[] | undefined;
  checkBoxChangeHandler: (index: number, changeKey: PicKey<todoGetDataType, boolean>) => void;
};

const TodoList: FC<propsType> = ({ todos, checkBoxChangeHandler }) => {
  const list =
    todos &&
    todos.map((todo, index) => (
      <ul key={index}>
        <PrimaryCheckBox
          isChecked={todo.isCompleted}
          onChange={() => {
            checkBoxChangeHandler(index, 'isCompleted');
          }}
        />
        <span>{todo.isDeleted ? <del>{todo.task}</del> : todo.task}</span>
        <DeleteButton
          isDeleted={todo.isDeleted}
          onClick={() => {
            checkBoxChangeHandler(index, 'isDeleted');
          }}
        />
      </ul>
    ));

  return (
    <div>
      <li>{list}</li>
    </div>
  );
};

export default TodoList;
