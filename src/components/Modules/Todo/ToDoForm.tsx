import { VStack } from '@chakra-ui/react';
import { Dispatch, FC, memo, SetStateAction } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import { PrimaryButton } from '../../Atoms/Button/PrimaryButton';
import { PrimaryInputText } from '../../Atoms/Input/PrimaryInputText';
import { useTodoForm } from './hooks/useTodoForm';

type propsType = {
  todos: todoGetDataType[] | undefined;
  setTodos: Dispatch<SetStateAction<todoGetDataType[] | undefined>>;
  setUpdateFlag: Dispatch<SetStateAction<boolean>>;
};

export const ToDoForm: FC<propsType> = memo(({ todos, setTodos, setUpdateFlag }) => {
  const { inputValue, handleChange, handleSubmit } = useTodoForm(todos, setTodos, setUpdateFlag);
  return (
    <form onSubmit={handleSubmit}>
      <VStack>
        <PrimaryInputText placeholder="TodoName" value={inputValue} onChange={handleChange} />
        <PrimaryButton type="submit">ToDoへ追加</PrimaryButton>
      </VStack>
    </form>
  );
});
