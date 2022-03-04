import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import AuthProvider from './providers/AuthProvider';
import NowBatchCommitProvider from './providers/NowBatchCommitProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <NowBatchCommitProvider>
          <Header />
          <Dashboard />
        </NowBatchCommitProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
