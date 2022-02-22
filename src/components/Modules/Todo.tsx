import { FC } from 'react';

import ToDoForm from '../Elements/Todo/ToDoForm';
import TodoList from '../Elements/Todo/TodoList';
import TodoUpdate from '../Elements/Todo/TodoUpdate';
import { useTodo } from './hooks/useTodo';

const Todo: FC = () => {
  const { currentUser, todos, updateFlag, setTodos, setUpdateFlag, isCmpleteChangeHandler } =
    useTodo();

  return (
    <>
      {currentUser && (
        <>
          <ToDoForm todos={todos} setTodos={setTodos} setUpdateFlag={setUpdateFlag} />
          <TodoList todos={todos} isCmpleteChangeHandler={isCmpleteChangeHandler} />
          <TodoUpdate updateFlag={updateFlag} />
        </>
      )}
    </>
  );
};

export default Todo;
