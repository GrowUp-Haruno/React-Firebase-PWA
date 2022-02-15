import { FC } from 'react';
import { signInWithGoogle } from '../../../service/firebase';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

const GoogleLoginButton: FC = () => {
  return <PrimaryButton onClick={signInWithGoogle}>ログイン</PrimaryButton>;
};

export default GoogleLoginButton;
