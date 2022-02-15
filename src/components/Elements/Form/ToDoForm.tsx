import { FC } from 'react';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';
import PrimaryInputText from '../../Atoms/Input/PrimaryInputText';


const ToDoForm: FC = () => {
  return (
    <form>
      <PrimaryInputText placeholder='TodoName'/>
      <PrimaryButton>追加</PrimaryButton>
    </form>
  );
};

export default ToDoForm;
