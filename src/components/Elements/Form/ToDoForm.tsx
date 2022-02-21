import { Dispatch, FC, memo } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';
import PrimaryInputText from '../../Atoms/Input/PrimaryInputText';
import { useTodoForm } from './hooks/useTodoForm';

type propsType = {
  todos: todoGetDataType[] | undefined;
  setTodos: Dispatch<React.SetStateAction<todoGetDataType[] | undefined>>;
};

const ToDoForm: FC<propsType> = memo(({ todos, setTodos }) => {
  const { inputValue, handleChange, handleSubmit } = useTodoForm(todos, setTodos);

  return (
    <form onSubmit={handleSubmit}>
      <PrimaryInputText placeholder="TodoName" value={inputValue} onChange={handleChange} />
      <PrimaryButton type="submit">追加</PrimaryButton>
    </form>
  );
});

export default ToDoForm;
