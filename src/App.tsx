import { ChakraProvider } from '@chakra-ui/react';
import { Page } from './components/Substrates/Page';
import AuthProvider from './providers/AuthProvider';
import NowBatchCommitProvider from './providers/NowBatchCommitProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <NowBatchCommitProvider>
          <Page />
        </NowBatchCommitProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
