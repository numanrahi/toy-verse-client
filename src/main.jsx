import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Login from './components/Login/Login';
import Auth from './LayOut/Auth';

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
        element:<Login></Login>
      }
    ]
  },
  {
    path: '/main',
    element: <Main></Main>
  },
  {
    path: '/blog',
    element: <div>Blog</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
