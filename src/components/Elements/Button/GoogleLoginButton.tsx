import { FC, memo } from 'react';

import { signInWithGoogle } from '../../../service/firebaseAuthentication';
import PrimaryButton from '../../Atoms/Button/PrimaryButton';

export const GoogleLoginButton: FC = memo(() => {
  return <PrimaryButton onClick={signInWithGoogle}>Google ログイン</PrimaryButton>;
});
