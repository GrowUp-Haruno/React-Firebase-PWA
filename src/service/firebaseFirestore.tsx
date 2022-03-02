import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { todoDataType } from '../models/todoDataType';
import { todoGetDataType } from '../models/todoGetDataType';
import { currentUserTyep } from '../types/currentUserTyep';
import { firebaseFirestore } from './firebase';

/**
 * Firestore: todoのデータ書込む
 */
export const addTodo = async (currentUser: currentUserTyep, todoData: todoDataType) => {
  if (currentUser) {
    const addTodoRef = collection(firebaseFirestore, `users/${currentUser.uid}/todos`);

    await addDoc(addTodoRef, todoData);
  }
};

/**
 * Firestore: todoのデータ更新
 */
export const updateTodo = async (currentUser: currentUserTyep, todoGetData: todoGetDataType) => {
  if (currentUser) {
    const { task, isCompleted, createdAt } = todoGetData;
    const updateTodoRef = doc(firebaseFirestore, `users/${currentUser.uid}/todos`, todoGetData.id);
    const updateTodoData: todoDataType = {
      task: task,
      isCompleted: isCompleted,
      createdAt: createdAt,
    };

    await updateDoc(updateTodoRef, updateTodoData);
    console.log('更新完了');
  }
};

/**
 * Firestore: todoのデータ削除
 */
export const deleteTodo = async (currentUser: currentUserTyep, todoGetData: todoGetDataType) => {
  if (currentUser) {
    const deleteTodoRef = doc(
      firebaseFirestore,
      `users/${currentUser.uid}/todos/${todoGetData.id}`
    );

    await deleteDoc(deleteTodoRef);
    console.log('削除完了');
  }
};

/**
 * Firestore: todoのデータを読込む
 */
export const fetchTodo = async (currentUser: currentUserTyep) => {
  if (currentUser) {
    const todoRef: CollectionReference<todoDataType | DocumentData> = collection(
      firebaseFirestore,
      `users/${currentUser.uid}/todos`
    );
    const todoQuery = query(todoRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(todoQuery);

    return snapshot.docs.map<todoGetDataType>((doc) => ({
      task: doc.data().task,
      createdAt: doc.data().createdAt,
      isCompleted: doc.data().isCompleted,
      id: doc.id,
      isDeleted: false,
    }));
  }
};
