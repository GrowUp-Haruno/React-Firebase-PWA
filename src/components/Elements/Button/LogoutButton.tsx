import { FC } from 'react';
import { logout } from '../../../service/firebase';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

const LogoutButton: FC = () => {
  return <PrimaryButton onClick={logout}>ログアウト</PrimaryButton>;
};

export default LogoutButton;
