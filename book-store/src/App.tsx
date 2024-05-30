import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { BookStoreThemeProvider } from './context/ThemeContext';
import ThemeSwithcer from './components/header/ThemeSwithcer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/Error';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: '/books',
    element: <Layout>도서 목록</Layout>,
  },
  {
    path: '/siginup',
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwithcer />
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
