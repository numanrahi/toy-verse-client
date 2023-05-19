import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Login from './components/Login/Login';
import Auth from './LayOut/Auth';
import Register from './components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import PageNotFound from './LayOut/pageNotFound';
import Blog from './components/Blog/Blog';
import AddAToy from './components/AddAToy/AddAToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth></Auth>,
    children: [
      {
        path: '/',
        element: <Navigate to="/main"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/addatoy',
        element: <AddAToy></AddAToy>
      }
    ]
  },
  {
    path: '/main',
    element: <Main></Main>
  },

  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
