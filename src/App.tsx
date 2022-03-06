import { ChakraProvider } from '@chakra-ui/react';
import { BaseLayout } from './components/Atoms/Layout/BaseLayout';
import { Login } from './components/Substrates/Login';
import Todo from './components/Substrates/Todo';
import AuthProvider from './providers/AuthProvider';
import NowBatchCommitProvider from './providers/NowBatchCommitProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <NowBatchCommitProvider>
          <BaseLayout>
            <Login />
            <Todo />
          </BaseLayout>
        </NowBatchCommitProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
