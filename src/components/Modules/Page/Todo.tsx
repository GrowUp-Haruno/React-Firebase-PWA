import { FC, memo, useContext } from 'react';
import { Box, Divider } from '@chakra-ui/react';

import { PrimaryCard } from '../../Atoms/Card/PrimaryCard';
import { UpdateButton } from '../../Elements/Button/UpdateButton';
import { ToDoForm } from '../Todo/ToDoForm';
import { TodoList } from '../Todo/TodoList';
import { useTodo } from './hooks/useTodo';
import { NetworkStatusContext } from '../../../providers/NetworkStatusProvider';

export const Todo: FC = memo(() => {
  const { isOnline } =useContext(NetworkStatusContext);
  const {
    todos,
    updateFlag,
    // isOnline,
    setTodos,
    setUpdateFlag,
    checkBoxChangeHandler,
    todoUpdateHandler,
  } = useTodo();

  return (
    <PrimaryCard>
      <ToDoForm todos={todos} setTodos={setTodos} setUpdateFlag={setUpdateFlag} />
      <Divider />
      <TodoList todos={todos} checkBoxChangeHandler={checkBoxChangeHandler} />
      <Divider />
      {!isOnline && <Box>現在オフライン中のため、更新ボタンが利用できません。</Box>}
      <UpdateButton isDisabled={updateFlag && isOnline} onClick={todoUpdateHandler} />
    </PrimaryCard>
  );
});
