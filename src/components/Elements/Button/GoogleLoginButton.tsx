import { FC, memo } from 'react';

import { signInWithGoogle } from '../../../service/firebaseAuthentication';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

const GoogleLoginButton: FC = memo(() => {
  return <PrimaryButton onClick={signInWithGoogle}>ログイン</PrimaryButton>;
});

export default GoogleLoginButton;
