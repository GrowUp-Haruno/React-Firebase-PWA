import {
  addDoc,
  collection,
  CollectionReference,
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
    await addDoc(collection(firebaseFirestore, `users/${currentUser.uid}/todos`), todoData);
  }
};

/**
 * Firestore: todoのデータ更新
 */
export const updateTodo = async (currentUser: currentUserTyep, todoGetData: todoGetDataType) => {
  if (currentUser) {
    const todoRef = doc(firebaseFirestore, `users/${currentUser.uid}/todos`, todoGetData.id);
    const todoData: todoDataType = {...todoGetData}
    await updateDoc(todoRef, todoData);
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
      isComplete: doc.data().isComplete,
      id: doc.id,
    }));
  }
};
