import { FC } from 'react';

import ToDoForm from '../Elements/Form/ToDoForm';
import TodoList from '../Elements/Form/TodoList';
import { useTodo } from './hooks/useTodo';

const Todo: FC = () => {
  const { currentUser, todos, setTodos } = useTodo();

  return (
    <>
      {currentUser && (
        <>
          <ToDoForm todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} />
        </>
      )}
    </>
  );
};

export default Todo;
