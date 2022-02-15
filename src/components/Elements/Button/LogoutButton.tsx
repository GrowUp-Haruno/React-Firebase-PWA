import { FC, memo } from 'react';

import { logout } from '../../../service/firebaseAuthentication';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

const LogoutButton: FC = memo(() => {
  return <PrimaryButton onClick={logout}>ログアウト</PrimaryButton>;
});

export default LogoutButton;
