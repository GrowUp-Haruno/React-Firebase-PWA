import { ChakraProvider } from '@chakra-ui/react';
import { BaseLayout } from './components/Atoms/Layout/BaseLayout';
import { Page } from './components/Substrates/Page';
import AuthProvider from './providers/AuthProvider';
import NowBatchCommitProvider from './providers/NowBatchCommitProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <NowBatchCommitProvider>
          <BaseLayout>
            <Page />
          </BaseLayout>
        </NowBatchCommitProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
