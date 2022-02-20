import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { useEffect, useState } from 'react';
import { currentUserTyep } from '../types/currentUserTyep';
import { firebaseAuth } from './firebase';

/**
 * ユーザー情報を取得する
 */
export const useAuthentication = () => {
  const [currentUser, setCurrentUser] = useState<currentUserTyep>();

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(firebaseAuth, (user) => setCurrentUser(user));

    return () => {
      Unsubscribe();
    };
  }, []);
  return { currentUser };
};

/**
 * Googleログイン
 */
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(firebaseAuth, googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error: FirebaseError) => {
      console.log(error.message);
    });
};

/**
 * 共通ログアウト
 */
export const logout = () => {
  signOut(firebaseAuth)
    .then(() => {
      console.log('logged out');
      document.location.reload();
    })
    .catch((error: FirebaseError) => {
      console.log(error.message);
    });
};
