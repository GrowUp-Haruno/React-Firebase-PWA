import Dashboard from './components/Dashboard';
import Header from './components/Header';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
