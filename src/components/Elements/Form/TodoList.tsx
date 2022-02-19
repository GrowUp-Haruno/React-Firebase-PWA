import { DocumentData } from 'firebase/firestore';
import { FC } from 'react';
import { todoDataType } from '../../../models/todoDataType';

type propsType = {
  todos: (DocumentData | todoDataType)[] | undefined;
};

const TodoList: FC<propsType> = ({ todos }) => {
  console.log(todos);
  return <div></div>;
};

export default TodoList;
