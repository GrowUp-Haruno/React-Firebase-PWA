import { FC, memo, useContext } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import GoogleLoginButton from '../Elements/Button/GoogleLoginButton';
import LogoutButton from '../Elements/Button/LogoutButton';

const HeaderButton: FC = memo(() => {
  const currentUser = useContext(AuthContext);
  return <>{currentUser ? <LogoutButton /> : <GoogleLoginButton />}</>;
});

export default HeaderButton;
