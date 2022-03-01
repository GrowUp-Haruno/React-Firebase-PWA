import { Timestamp } from 'firebase/firestore';

export type todoGetDataType = {
  id: string;
  task: string;
  createdAt: Timestamp;
  isCompleted: boolean;
  isDelete: boolean;
};
