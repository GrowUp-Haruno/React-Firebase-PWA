import { FC, memo } from 'react';

import { PrimaryCard } from '../Atoms/Card/PrimaryCard';
import { UpdateButton } from '../Elements/Button/UpdateButton';
import ToDoForm from '../Elements/Todo/ToDoForm';
import TodoList from '../Elements/Todo/TodoList';

import { useTodo } from './hooks/useTodo';

const Todo: FC = memo(() => {
  const { todos, updateFlag, setTodos, setUpdateFlag, checkBoxChangeHandler, todoUpdateHandler } =
    useTodo();

  return (
    <PrimaryCard>
      <ToDoForm todos={todos} setTodos={setTodos} setUpdateFlag={setUpdateFlag} />
      <TodoList todos={todos} checkBoxChangeHandler={checkBoxChangeHandler} />
      <UpdateButton isDisabled={updateFlag} onClick={todoUpdateHandler} />
    </PrimaryCard>
  );
});

export default Todo;
