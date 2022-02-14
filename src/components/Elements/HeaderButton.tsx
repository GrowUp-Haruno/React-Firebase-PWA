import { FC, memo, useContext } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import { logout, signInWithGoogle } from '../../service/firebase';

const HeaderButton: FC = memo(() => {
  const currentUser = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <button onClick={logout}>ログアウト</button>
      ) : (
        <button onClick={signInWithGoogle}>ログイン</button>
      )}
    </>
  );
});

export default HeaderButton;
