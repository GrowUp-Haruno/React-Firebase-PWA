import { useCallback, useContext, useEffect, useState } from 'react';
import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
import { AuthContext } from '../../../providers/AuthProvider';
import { NowBatchCommitContext } from '../../../providers/NowBatchCommitProvider';
import { batchTodo, fetchTodo } from '../../../service/firebaseFirestore';

/**
 * useTodoカスタムフック
 * @template - const { todos, setTodos } = useTodo();
 */
export const useTodo = () => {
  const currentUser = useContext(AuthContext);
  const { setNowBatchCommit } = useContext(NowBatchCommitContext);

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
          setNowBatchCommit(true);
          await batch.commit();
        } catch (error) {
          console.log('Firestoreバッチ処理エラー');
          console.log(error);
        } finally {
          console.log('Firestoreバッチ処理完了');
          setTodos(await fetchTodo(currentUser));
          setUpdateFlag(false);
          setNowBatchCommit(false);
          console.log('Firestore再読み込み完了');
        }
      }
    }
  }, [currentUser, setNowBatchCommit, todos]);

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
    todoUpdateHandler,
  };
};
