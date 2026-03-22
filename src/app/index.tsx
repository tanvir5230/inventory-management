import { AppProvider } from './provider';
import { AppRouter } from './Router';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
