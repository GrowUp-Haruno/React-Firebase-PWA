import Dashboard from './components/Dashboard';
import Header from './components/Header';
import AuthProvider from './providers/AuthProvider';
import NowBatchCommitProvider from './providers/NowBatchCommitProvider';

function App() {
  return (
    <AuthProvider>
      <NowBatchCommitProvider>
        <Header />
        <Dashboard />
      </NowBatchCommitProvider>
    </AuthProvider>
  );
}

export default App;
