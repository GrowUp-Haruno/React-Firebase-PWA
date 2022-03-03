import { FC } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
import PrimaryCheckBox from '../../Atoms/Input/PrimaryCheckBox';
// import PrimaryButton from '../../Atoms/Button/PrimaryButton';

type propsType = {
  todos: todoGetDataType[] | undefined;
  nowBatchCommit: boolean;
  checkBoxChangeHandler: (index: number, changeKey: PicKey<todoGetDataType, boolean>) => void;
};

const TodoList: FC<propsType> = ({ todos, nowBatchCommit, checkBoxChangeHandler }) => {
  const list =
    todos &&
    todos.map((todo, index) => (
      <ul key={index}>
        <PrimaryCheckBox
          checked={todo.isCompleted}
          onChange={() => {
            checkBoxChangeHandler(index, 'isCompleted');
          }}
          disabled={nowBatchCommit}
        />
        <span>{todo.isDeleted ? <del>{todo.task}</del> : todo.task}</span>
        <PrimaryCheckBox
          checked={todo.isDeleted}
          onChange={() => {
            checkBoxChangeHandler(index, 'isDeleted');
          }}
          disabled={nowBatchCommit}
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
