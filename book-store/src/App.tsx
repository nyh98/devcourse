import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { BookStoreThemeProvider } from './context/ThemeContext';
import ThemeSwithcer from './components/header/ThemeSwithcer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/Error';
import Signup from './pages/Signup';
import ResetPwd from './pages/ResetPwd';
import Login from './pages/Login';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';

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
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: '/siginup',
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: '/reset',
    element: (
      <Layout>
        <ResetPwd />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: '/book/:bookId',
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: '/order',
    element: (
      <Layout>
        <Order />
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
