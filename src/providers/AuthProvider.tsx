import { createContext, FC, memo } from 'react';
import { useAuthentication } from '../service/firebaseAuthentication';
import { currentUserTyep } from '../types/currentUserTyep';

export const AuthContext = createContext<currentUserTyep>(undefined);

/**
 * Auth情報のプロバイダ
 */
export const AuthProvider: FC = memo(({ children }) => {
  const { currentUser } = useAuthentication();

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
});