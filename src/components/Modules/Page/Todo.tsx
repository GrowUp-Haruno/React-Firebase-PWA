import { FC, memo } from 'react';
import { Divider } from '@chakra-ui/react';

import { PrimaryCard } from '../../Atoms/Card/PrimaryCard';
import { UpdateButton } from '../../Elements/Button/UpdateButton';
import { ToDoForm } from '../Todo/ToDoForm';
import { TodoList } from '../Todo/TodoList';
import { useTodo } from './hooks/useTodo';

export const Todo: FC = memo(() => {
  const { todos, updateFlag, setTodos, setUpdateFlag, checkBoxChangeHandler, todoUpdateHandler } =
    useTodo();

  return (
    <PrimaryCard>
      <ToDoForm todos={todos} setTodos={setTodos} setUpdateFlag={setUpdateFlag} />
      <Divider />
      <TodoList todos={todos} checkBoxChangeHandler={checkBoxChangeHandler} />
      <Divider />
      <UpdateButton isDisabled={updateFlag} onClick={todoUpdateHandler} />
    </PrimaryCard>
  );
});
