import { FC, memo } from 'react';

import { PrimaryCard } from '../Atoms/Card/PrimaryCard';
import ToDoForm from '../Elements/Todo/ToDoForm';
import TodoList from '../Elements/Todo/TodoList';
import TodoUpdate from '../Elements/Todo/TodoUpdate';
import { useTodo } from './hooks/useTodo';

const Todo: FC = memo(() => {
  const { todos, updateFlag, setTodos, setUpdateFlag, checkBoxChangeHandler, todoUpdateHandler } =
    useTodo();

  return (
    <PrimaryCard>
      <ToDoForm todos={todos} setTodos={setTodos} setUpdateFlag={setUpdateFlag} />
      <TodoList todos={todos} checkBoxChangeHandler={checkBoxChangeHandler} />
      <TodoUpdate updateFlag={updateFlag} todoUpdateHandler={todoUpdateHandler} />
    </PrimaryCard>
  );
});

export default Todo;
