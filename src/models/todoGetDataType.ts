import { Timestamp } from 'firebase/firestore';

export type todoGetDataType = {
  id: string;
  task: string;
  createdAt: Timestamp;
  isComplete: boolean;
  enableDelete?: boolean;
};
