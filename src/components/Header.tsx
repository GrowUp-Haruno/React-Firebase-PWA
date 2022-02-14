import {FC} from 'react'

//Propsの型定義
type PropsType = {
  
}

const Header:FC<PropsType> = () => {
  return (
    <header>
      ヘッダー
      <button>ログイン</button>
    </header>
  ) 
}

export default Header