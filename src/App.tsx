import { ChakraProvider } from '@chakra-ui/react';
import { Page } from './components/Substrates/Page';
import AuthProvider from './providers/AuthProvider';
import { CommunicatingProvider } from './providers/CommunicatingProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <CommunicatingProvider>
          <Page />
        </CommunicatingProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
