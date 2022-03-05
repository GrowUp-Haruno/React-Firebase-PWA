import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
// import Header from './components/Header';
import { BaseLayout } from './components/Layouts/BaseLayout';
import { Login } from './components/Substrates/Login';
import AuthProvider from './providers/AuthProvider';
import NowBatchCommitProvider from './providers/NowBatchCommitProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <NowBatchCommitProvider>
          <BaseLayout>
            <Login />
            <Dashboard />
          </BaseLayout>
        </NowBatchCommitProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
