import { useContext, useEffect, useState } from 'react';
import { todoGetDataType } from '../../../models/todoGetDataType';
import { AuthContext } from '../../../providers/AuthProvider';
import { fetchTodo } from '../../../service/firebaseFirestore';

/**
 * useTodoカスタムフック
 * @template - const { todos, setTodos } = useTodo();
 */
export const useTodo = () => {
  const currentUser = useContext(AuthContext);
  const [todos, setTodos] = useState<Array<todoGetDataType> | undefined>([]);
  const [updateFlag, setUpdateFlag] = useState<boolean>(false);

  // isCmpleteの論理を反転
  const isCmpleteChangeHandler = (index: number) => {
    if (todos) {
      setTodos(
        todos.map((todo, i) =>
          i === index ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
        )
      );
      setUpdateFlag(true);
    }
  };

  // todoの初回読み込み
  useEffect(() => {
    (async () => {
      setTodos(await fetchTodo(currentUser));
    })();
    return () => {
      setTodos([]);
      setUpdateFlag(false);
    };
  }, [currentUser]);

  return { currentUser, todos, updateFlag, setTodos, setUpdateFlag, isCmpleteChangeHandler };
};
