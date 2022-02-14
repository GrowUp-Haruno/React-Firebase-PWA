import {FC, useContext} from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { signInWithGoogle } from '../service/firebase';

//Propsの型定義
type PropsType = {
  
}

const Header: FC<PropsType> = () => {
  const currentUser = useContext(AuthContext)
  console.log(currentUser);
  return (
    <header>
      ヘッダー
      <button onClick={signInWithGoogle}>ログイン</button>
    </header>
  ); 
}

export default Header