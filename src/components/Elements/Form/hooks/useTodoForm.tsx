import { Timestamp } from 'firebase/firestore';
import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';

import { todoGetDataType } from '../../../../models/todoGetDataType';

export const useTodoForm = (
  todos: todoGetDataType[] | undefined,
  setTodos: Dispatch<React.SetStateAction<todoGetDataType[] | undefined>>
) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      // リロード抑制
      event.preventDefault();

      const todoData: todoGetDataType = {
        task: inputValue,
        createdAt: Timestamp.now(),
        isComplete: false,
        id: '',
      };

      if (todos) {
        setTodos([todoData, ...todos]);
        setInputValue('');
      }
    },
    [inputValue, setTodos, todos]
  );

  return { inputValue, handleChange, handleSubmit };
};
