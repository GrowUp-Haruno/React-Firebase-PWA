import { createContext, FC } from 'react';
import { useAuthentication } from '../service/firebaseAuthentication';
import { currentUserTyep } from '../types/currentUserTyep';

export const AuthContext = createContext<currentUserTyep>(undefined);

/**
 * Auth情報のプロバイダ
 */
const AuthProvider: FC = ({ children }) => {
  const { currentUser } = useAuthentication();

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
