import { ChakraProvider } from '@chakra-ui/react';
import { Page } from './components/Substrates/Page';
import { AuthProvider } from './providers/AuthProvider';
import { CommunicatingProvider } from './providers/CommunicatingProvider';
import { LastUpdateProvider } from './providers/LastUpdateProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <CommunicatingProvider>
          <LastUpdateProvider>
            <Page />
          </LastUpdateProvider>
        </CommunicatingProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
