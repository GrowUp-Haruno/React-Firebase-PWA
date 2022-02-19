import { DocumentData } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { todoDataType } from '../../../models/todoDataType';
import { AuthContext } from '../../../providers/AuthProvider';
import { fetchTodo } from '../../../service/firebaseFirestore';

/**
 * useTodoカスタムフック
 * @template - const { todos, setTodos } = useTodo();
 */
export const useTodo = () => {
  const currentUser = useContext(AuthContext);
  const [todos, setTodos] = useState<(DocumentData | todoDataType)[] | undefined>([]);

  useEffect(() => {
    (async () => {
      setTodos(await fetchTodo(currentUser));
    })();
  }, [currentUser]);

  return { currentUser, todos, setTodos };
};
