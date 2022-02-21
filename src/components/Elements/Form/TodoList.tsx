import { FC } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';

type propsType = {
  todos: todoGetDataType[] | undefined;
};

const TodoList: FC<propsType> = ({ todos }) => {
  console.log(todos)
  const list =
    todos &&
    todos.map((todo, index) => (
      <ul key={index}>
        <input type="checkbox" checked={todo.isComplete} onChange={() => {}} />
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
