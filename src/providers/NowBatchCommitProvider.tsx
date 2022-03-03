import { createContext, Dispatch, FC, useState } from 'react';

type NowBatchCommitContextType = {
  nowBatchCommit: boolean;
  setNowBatchCommit: Dispatch<React.SetStateAction<boolean>>;
};

/**
 * batch.commit()状態のコンテキスト
 */
export const NowBatchCommitContext = createContext({} as NowBatchCommitContextType);

/**
 * batch.commit()状態のプロバイダ
 */
const NowBatchCommitProvider: FC = ({ children }) => {
  const [nowBatchCommit, setNowBatchCommit] = useState<boolean>(false);

  return (
    <NowBatchCommitContext.Provider value={{ nowBatchCommit, setNowBatchCommit }}>
      {children}
    </NowBatchCommitContext.Provider>
  );
};

export default NowBatchCommitProvider;
