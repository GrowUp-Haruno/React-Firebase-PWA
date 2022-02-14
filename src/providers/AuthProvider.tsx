import { onAuthStateChanged, User } from '@firebase/auth';
import { createContext, FC, useEffect, useState } from 'react';
import { firebaseAuth } from '../service/firebase';

export const AuthContext = createContext<User | undefined>(undefined);

/**
 * Auth情報のプロバイダ
 */
const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(firebaseAuth, (user) => user && setCurrentUser(user));

    return () => {
      Unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
