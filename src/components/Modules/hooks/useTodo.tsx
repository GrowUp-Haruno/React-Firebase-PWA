import { useContext, useEffect, useState } from 'react';
import { todoDataGetType } from '../../../models/todoGetDataType';
import { AuthContext } from '../../../providers/AuthProvider';
import { fetchTodo } from '../../../service/firebaseFirestore';

/**
 * useTodoカスタムフック
 * @template - const { todos, setTodos } = useTodo();
 */
export const useTodo = () => {
  const currentUser = useContext(AuthContext);
  const [todos, setTodos] = useState<Array<todoDataGetType> | undefined>([]);

  // todoの初回読み込み
  useEffect(() => {
    (async () => {
      setTodos(await fetchTodo(currentUser));
    })();
  }, [currentUser]);

  return { currentUser, todos, setTodos };
};
