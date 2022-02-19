import { collection, DocumentData, getDocs, orderBy, query } from 'firebase/firestore';
import { FC, memo, useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import { firebaseFirestore } from '../../service/firebase';
import GoogleLoginButton from '../Elements/Button/GoogleLoginButton';
import ToDoForm from '../Elements/Form/ToDoForm';

/**
 * currentUserの存在を検知して、Dashboardの表示を切り替える
 */
const DashboardSwitcher: FC = memo(() => {
  const currentUser = useContext(AuthContext);
  const [todos, setTodos] = useState<DocumentData>([]);
  useEffect(() => {
    if (currentUser) {
      const todoRef = collection(firebaseFirestore, `users/${currentUser.uid}/todos`);
      const todoQuery = query(todoRef, orderBy('createdAt', 'desc'));
      (async () => {
        const snapshot = await getDocs(todoQuery);
        setTodos(snapshot.docs.map((doc) => doc.data()));
      })();
    }
  }, [currentUser]);
  
  console.log(todos);
  return (
    <>
      {!currentUser ? (
        <GoogleLoginButton />
      ) : (
        <>
          <ToDoForm />
          <div></div>
        </>
      )}
    </>
  );
});

export default DashboardSwitcher;
