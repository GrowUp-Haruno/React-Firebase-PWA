import { createContext, FC, memo, useEffect, useState } from 'react';

type NetworkStatusContextType = {
  isOnline: boolean;
};

export const NetworkStatusContext = createContext({} as NetworkStatusContextType);

/**
 * ネットワーク機器の状態(オンラインかオフラインか)を管理
 */
export const NetworkStatusProvider: FC = memo(({ children }) => {
  // オンライン <=> オフライン切り替わりのイベントリスナ
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const onLineListener = () => {
    setIsOnline(() => true);
  };
  const offLineListener = () => {
    setIsOnline(() => false);
  };

  useEffect(() => {
    // イベントリスナを登録
    window.addEventListener('online', onLineListener);
    window.addEventListener('offline', offLineListener);
    return () => {
      // イベントリスナを解除
      window.removeEventListener('online', onLineListener);
      window.removeEventListener('offline', offLineListener);
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={{ isOnline }}>{children}</NetworkStatusContext.Provider>
  );
});
