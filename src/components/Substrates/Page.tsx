import { FC, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { BaseLayout } from '../Atoms/Layout/BaseLayout';
import { Login } from '../Modules/Page/Login';
import Todo from '../Modules/Todo';

export const Page: FC = () => {
  const currentUser = useContext(AuthContext);
  return (
    <BaseLayout justify={!currentUser ? 'center' : 'start'}>
      {!currentUser ? <Login /> : <Todo />}
    </BaseLayout>
  );
};
