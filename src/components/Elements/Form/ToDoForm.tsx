import { DocumentData } from 'firebase/firestore';
import { Dispatch, FC, memo } from 'react';
import { todoDataType } from '../../../models/todoDataType';

import PrimaryButton from '../../Atoms/Button/PrimaryButton';
import PrimaryInputText from '../../Atoms/Input/PrimaryInputText';
import { useTodoForm } from './hooks/useTodoForm';

type propsType = {
  setTodos: Dispatch<React.SetStateAction<(DocumentData | todoDataType)[] | undefined>>;
};

const ToDoForm: FC<propsType> = memo(({ setTodos }) => {
  const { inputValue, handleChange, handleSubmit } = useTodoForm(setTodos);

  return (
    <form onSubmit={handleSubmit}>
      <PrimaryInputText placeholder="TodoName" value={inputValue} onChange={handleChange} />
      <PrimaryButton type="submit">追加</PrimaryButton>
    </form>
  );
});

export default ToDoForm;
