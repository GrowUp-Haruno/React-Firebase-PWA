import { FC, memo, useContext } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import GoogleLoginButton from '../Elements/Button/GoogleLoginButton';
import ToDoForm from '../Elements/Form/ToDoForm';

const DashboardSwitcher: FC = memo(() => {
  const currentUser = useContext(AuthContext);
  return <>{!currentUser ? <GoogleLoginButton /> : <ToDoForm />}</>;
});

export default DashboardSwitcher;
