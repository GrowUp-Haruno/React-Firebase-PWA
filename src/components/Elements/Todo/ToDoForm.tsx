import { Dispatch, FC, memo, SetStateAction,  } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';
import PrimaryInputText from '../../Atoms/Input/PrimaryInputText';
import { useTodoForm } from './hooks/useTodoForm';

type propsType = {
  todos: todoGetDataType[] | undefined;
  setTodos: Dispatch<SetStateAction<todoGetDataType[] | undefined>>;
  setUpdateFlag: Dispatch<SetStateAction<boolean>>;
};

const ToDoForm: FC<propsType> = memo(({ todos,  setTodos, setUpdateFlag }) => {
  const { inputValue, handleChange, handleSubmit } = useTodoForm(todos, setTodos, setUpdateFlag);
  return (
    <form onSubmit={handleSubmit}>
      <PrimaryInputText
        placeholder="TodoName"
        value={inputValue}
        onChange={handleChange}
      />
      <PrimaryButton type="submit">
        追加
      </PrimaryButton>
    </form>
  );
});

export default ToDoForm;
