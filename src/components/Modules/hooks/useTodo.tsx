import { useCallback, useContext, useEffect, useState } from 'react';
import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
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

  // // isCmpleteの論理を反転
  // const isCompleteChangeHandler = useCallback(
  //   (index: number) => {
  //     if (todos) {
  //       setTodos(
  //         todos.map((todo, i) =>
  //           i === index ? { ...todo, isComplete: !todo.isCompleted } : { ...todo }
  //         )
  //       );
  //       setUpdateFlag(true);
  //     }
  //   },
  //   [todos]
  // );

  // isCmpleteの論理を反転
  const checkBoxChangeHandler = useCallback(
    (index: number, changeKey: PicKey<todoGetDataType, boolean>) => {
      if (todos) {
        setTodos(
          todos.map((todo, i) =>
            i === index ? { ...todo, [changeKey]: !todo[changeKey] } : { ...todo }
          )
        );
        setUpdateFlag(true);
      }
    },
    [todos]
  );

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

  return {
    currentUser,
    todos,
    updateFlag,
    setTodos,
    setUpdateFlag,
    checkBoxChangeHandler,
  };
};
