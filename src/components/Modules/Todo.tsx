import { FC } from 'react';

import ToDoForm from '../Elements/Todo/ToDoForm';
import TodoList from '../Elements/Todo/TodoList';
import TodoUpdate from '../Elements/Todo/TodoUpdate';
import { useTodo } from './hooks/useTodo';

const Todo: FC = () => {
  const {
    currentUser,
    todos,
    updateFlag,
    nowBatchCommit,
    setTodos,
    setUpdateFlag,
    checkBoxChangeHandler,
    todoUpdateHandler,
  } = useTodo();

  return (
    <>
      {currentUser && (
        <>
          <ToDoForm
            todos={todos}
            setTodos={setTodos}
            setUpdateFlag={setUpdateFlag}
            nowBatchCommit={nowBatchCommit}
          />
          <TodoList
            todos={todos}
            checkBoxChangeHandler={checkBoxChangeHandler}
            nowBatchCommit={nowBatchCommit}
          />
          <TodoUpdate
            updateFlag={updateFlag}
            todoUpdateHandler={todoUpdateHandler}
            nowBatchCommit={nowBatchCommit}
          />
        </>
      )}
    </>
  );
};

export default Todo;
