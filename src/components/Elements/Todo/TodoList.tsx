import { Dispatch, FC, SetStateAction } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';

type propsType = {
  todos: todoGetDataType[] | undefined;
  setTodos: Dispatch<SetStateAction<todoGetDataType[] | undefined>>;
  setUpdateFlag: Dispatch<SetStateAction<boolean>>;
};

const TodoList: FC<propsType> = ({ todos, setTodos, setUpdateFlag }) => {
  const list =
    todos &&
    todos.map((todo, index) => (
      <ul key={index}>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => {
            setTodos(
              todos.map((todo, i) =>
                i === index ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
              )
            );
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
