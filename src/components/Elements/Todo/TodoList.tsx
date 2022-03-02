import { FC } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
import PrimaryCheckBox from '../../Atoms/Input/PrimaryCheckBox';
// import PrimaryButton from '../../Atoms/Button/PrimaryButton';

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
          checked={todo.isCompleted}
          onChange={() => {
            checkBoxChangeHandler(index, 'isCompleted');
          }}
        />
        <span>{todo.task}</span>
        <PrimaryCheckBox
          checked={todo.isDelete}
          onChange={() => {
            checkBoxChangeHandler(index, 'isDelete');
          }}
        />
      </ul>
    ));

  return (
    <div>
      <li>
        {/* <ul></ul> */}
        {list}
      </li>
    </div>
  );
};

export default TodoList;
