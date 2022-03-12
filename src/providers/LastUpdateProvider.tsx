import { createContext, Dispatch, FC, memo, SetStateAction, useState } from 'react';
import { PicKey } from '../models/UtilityType';

export type lastUpdateObjType = {
  count: number;
  time: number;
};


const initialLastUpdateObj: lastUpdateObjType = { count: 0, time: 0 };

type LastUpdateContextType = {
  lastUpdate: lastUpdateType;
  setLastUpdate: Dispatch<SetStateAction<lastUpdateType>>;
};

// 現在の設定
export type lastUpdateType = {
  changeProfile: lastUpdateObjType;
  updateToDo: lastUpdateObjType;
};

// lastUpdateTypeの初期化定数
export const InitialLastUpdate: lastUpdateType = {
  changeProfile: initialLastUpdateObj,
  updateToDo: initialLastUpdateObj,
};

// lastUpdateTypeのkey
export type lastUpdatekeyType = PicKey<lastUpdateType, lastUpdateObjType>;

export const LastUpdateContext = createContext({} as LastUpdateContextType);

/**
 * Firebaseとの更新頻度を管理
 */
export const LastUpdateProvider: FC = memo(({ children }) => {
  const [lastUpdate, setLastUpdate] = useState<lastUpdateType>(InitialLastUpdate);

  return (
    <LastUpdateContext.Provider value={{ lastUpdate, setLastUpdate }}>
      {children}
    </LastUpdateContext.Provider>
  );
});
