import { Timestamp } from 'firebase/firestore';
import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  useCallback,
  useContext,
  useState,
} from 'react';
import { todoDataType } from '../../../../models/todoDataType';
import { todoDataGetType } from '../../../../models/todoGetDataType';
import { AuthContext } from '../../../../providers/AuthProvider';
import { fetchTodo, addTodo } from '../../../../service/firebaseFirestore';

export const useTodoForm = (
  setTodos: Dispatch<React.SetStateAction<todoDataGetType[] | undefined>>
) => {
  const currentUser = useContext(AuthContext);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      try {
        // リロード抑制
        event.preventDefault();

        const todoData: todoDataType = {
          task: inputValue,
          createdAt: Timestamp.now(),
          isComplete: false,
        };
        
        // Todo更新
        await addTodo(currentUser, todoData);

        // Todoを再取得
        setTodos(await fetchTodo(currentUser));
      } catch (e) {
        console.error('Error adding document: ', e);
      } finally {
        // 書き込み完了後入力内容を削除
        setInputValue('');
      }
    },
    [currentUser, inputValue, setTodos]
  );

  return { inputValue, handleChange, handleSubmit };
};
