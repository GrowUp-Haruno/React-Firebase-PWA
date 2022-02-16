import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ChangeEventHandler, FormEventHandler, useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { firebaseFirestore } from "./firebase";


export const useFirestore = () => {
    const currentUser = useContext(AuthContext);
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setInputValue(event.target.value);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      try {
        // リロード抑制
        event.preventDefault();

        if (currentUser) {
          await addDoc(collection(firebaseFirestore, `users/${currentUser.uid}/todos`), {
            content: inputValue,
            createdAt: Timestamp.now(),
            isComplete: false,
          });
          // 書き込み完了後入力内容を削除
          setInputValue('');
        }
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
  
  return { inputValue, handleChange, handleSubmit };
}