import { Timestamp } from 'firebase/firestore';
import { FC } from 'react';

type propsType = {
  todos:
    | Array<{
        task: string;
        createdAt: Timestamp;
        isComplete: boolean;
        id: string;
      }>
    | undefined;
};

const TodoList: FC<propsType> = ({ todos }) => {
  const list =
    todos &&
    todos.map((todo) => (
      <ul key={todo.id}>
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
