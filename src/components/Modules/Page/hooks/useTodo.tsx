import { useCallback, useContext, useEffect, useState } from 'react';
import { todoGetDataType } from '../../../../models/todoGetDataType';
import { PicKey } from '../../../../models/UtilityType';
import { AuthContext } from '../../../../providers/AuthProvider';
import { CommunicatingContext } from '../../../../providers/CommunicatingProvider';
import { batchTodo, fetchTodo } from '../../../../service/firebaseFirestore';

/**
 * useTodoカスタムフック
 * @template - const { todos, setTodos } = useTodo();
 */
export const useTodo = () => {
  const currentUser = useContext(AuthContext);
  const { setCommunicating } = useContext(CommunicatingContext);

  const [todos, setTodos] = useState<Array<todoGetDataType> | undefined>([]);
  const [updateFlag, setUpdateFlag] = useState<boolean>(false);

  // isCmpleteの論理を反転
  const checkBoxChangeHandler = useCallback(
    (index: number, changeKey: PicKey<todoGetDataType, boolean>) => {
      if (todos) {
        setTodos(
          todos.map((todo, i) =>
            i === index ? { ...todo, [changeKey]: !todo[changeKey], isUpdated: true } : { ...todo }
          )
        );
        setUpdateFlag(true);
      }
    },
    [todos]
  );

  const todoUpdateHandler = useCallback(async () => {
    if (todos) {
      const batch = batchTodo(currentUser, todos);
      if (batch) {
        try {
          console.log('Firestoreバッチ処理開始');
          setCommunicating(true);
          await batch.commit();
        } catch (error) {
          console.log('Firestoreバッチ処理エラー');
          console.log(error);
        } finally {
          console.log('Firestoreバッチ処理完了');
          setTodos(await fetchTodo(currentUser));
          setUpdateFlag(false);
          setCommunicating(false);
          console.log('Firestore再読み込み完了');
        }
      }
    }
  }, [currentUser, setCommunicating, todos]);

  // todoの初回読み込み
  useEffect(() => {
    (async () => {
      console.log('開始')
      setTodos(await fetchTodo(currentUser));
      console.log('完了')
    })();
    return () => {
      setTodos([]);
      setUpdateFlag(false);
    };
  }, [currentUser]);

  return {
    todos,
    updateFlag,
    setTodos,
    setUpdateFlag,
    checkBoxChangeHandler,
    todoUpdateHandler,
  };
};
