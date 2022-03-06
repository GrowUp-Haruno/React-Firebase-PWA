import { FC, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Login } from '../Modules/Login';
import Todo from '../Modules/Todo';

export const Page: FC = () => {
  const currentUser = useContext(AuthContext);
  return <>{!currentUser ? <Login /> : <Todo />}</>;
};
