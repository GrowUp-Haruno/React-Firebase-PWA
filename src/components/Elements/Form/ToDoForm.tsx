import { FC, memo } from 'react';

import { useFirestore } from '../../../service/firebaseFirestore';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';
import PrimaryInputText from '../../Atoms/Input/PrimaryInputText';

const ToDoForm: FC = memo(() => {
  const { inputValue, handleChange, handleSubmit } = useFirestore();

  return (
    <form onSubmit={handleSubmit}>
      <PrimaryInputText placeholder="TodoName" value={inputValue} onChange={handleChange} />
      <PrimaryButton type="submit">追加</PrimaryButton>
    </form>
  );
});

export default ToDoForm;
