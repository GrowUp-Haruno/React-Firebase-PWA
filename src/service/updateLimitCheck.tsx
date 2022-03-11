import { FirebaseError } from 'firebase/app';
import { Dispatch } from 'react';

type lastUpdateType = { count: number; time: number };

const InitialLastUpdate: lastUpdateType = {
  count: 0,
  time: 0,
};

/**
 * 短時間の変更回数及び前回の更新時間を確認
 * - 前回の更新から1分超過、または更新回数が1分未満の内に規定回数以下なら更新を許可
 * - それ以外の場合はカスタムFirebaseErrorを返す
 * @example updateLimitCheck(lastUpdate, setLastUpdate, numberOfLimits, updateInterval)
 */
export const updateLimitCheck = (
  lastUpdate: lastUpdateType,
  setLastUpdate: Dispatch<React.SetStateAction<lastUpdateType>>,
  numberOfLimits: number,
  updateInterval: number,
  firebaseErrorCode: 'changeProfile-error'
) => {
  const nowTime = new Date().getTime();
  if (lastUpdate === InitialLastUpdate) {
    // プロフィール初変更
    setLastUpdate({ count: 1, time: nowTime });
  } else {
    if (
      lastUpdate.count < numberOfLimits ||
      lastUpdate.time + updateInterval * 60 * 1000 < nowTime
    ) {
      if (lastUpdate.time + updateInterval * 60 * 1000 < nowTime) {
        setLastUpdate({ count: 1, time: nowTime });
      } else {
        setLastUpdate({ count: lastUpdate.count + 1, time: nowTime });
      }
    } else {
      // 更新条件の規定値を超えた場合、FirebaseErrorを返す
      throw new FirebaseError(firebaseErrorCode, '');
    }
  }
};
