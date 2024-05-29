import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { BookStoreThemeProvider } from './context/ThemeContext';
import ThemeSwithcer from './components/header/ThemeSwithcer';

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwithcer />
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
