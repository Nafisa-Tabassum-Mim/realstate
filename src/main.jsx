import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Root } from 'postcss';
import ErrorPage from './components/pages/ErrorPage.jsx';
import Home from './components/pages/Home.jsx';
import Root from './components/Root/Root.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import AuthProvider from './components/firebase/AuthProvider.jsx';
import UserProfile from './components/pages/UserProfile.jsx';
import UpdateProfile from './components/pages/UpdateProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>
      },
      {
        path:'/updateprofile',
        element:<UpdateProfile></UpdateProfile>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
