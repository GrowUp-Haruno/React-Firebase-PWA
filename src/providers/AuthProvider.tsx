import { User } from '@firebase/auth';
import { createContext, FC } from 'react';
import { useAuthentication } from '../service/firebaseAuthentication';

export const AuthContext = createContext<User | undefined>(undefined);

/**
 * Auth情報のプロバイダ
 */
const AuthProvider: FC = ({ children }) => {
  const { currentUser } = useAuthentication();

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
