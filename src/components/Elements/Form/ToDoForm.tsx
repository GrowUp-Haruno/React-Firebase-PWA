import { ChangeEventHandler, FC, memo, useState } from 'react';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';
import PrimaryInputText from '../../Atoms/Input/PrimaryInputText';

const ToDoForm: FC = memo(() => {
  const [inputValue, setInputValue] = useState<string>();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <PrimaryInputText placeholder="TodoName" value={inputValue} onChange={handleChange} />
      <PrimaryButton>追加</PrimaryButton>
    </form>
  );
});

export default ToDoForm;
