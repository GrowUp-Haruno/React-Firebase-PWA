import { FC } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';

type propsType = {
  todos: todoGetDataType[] | undefined;
  isCmpleteChangeHandler: (index: number) => void;
};

const TodoList: FC<propsType> = ({ todos, isCmpleteChangeHandler }) => {
  const list =
    todos &&
    todos.map((todo, index) => (
      <ul key={index}>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => {
            isCmpleteChangeHandler(index);
          }}
        />
        <span>{todo.task}</span>
      </ul>
    ));

  return (
    <div>
      <li>{list}</li>
    </div>
  );
};

export default TodoList;
