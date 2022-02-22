import {FC} from 'react'

//Propsの型定義
type PropsType = {
  updateFlag: boolean
}

const TodoUpdate: FC<PropsType> = ({ updateFlag}) => {
  return (
    <>  </>
  ) 
}

TodoUpdate.displayName = 'TodoUpdate'
export default TodoUpdate