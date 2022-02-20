import { Timestamp } from 'firebase/firestore';

export type todoDataGetType = {
  id: string;
  task: string;
  createdAt: Timestamp;
  isComplete: boolean;
};
