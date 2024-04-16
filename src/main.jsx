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
import PrivateRoute from './components/firebase/PrivateRoute.jsx';
import EstateDetails from './components/Estate/EstateDetails.jsx';
import BookedResort from './components/Estate/BookedResort.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/estates.json')
      },
      {
        path: '/:id',
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('/estates.json')
      },
      {
        path: '/yourresorts',
        element: <PrivateRoute><BookedResort></BookedResort></PrivateRoute>,
        loader: () => fetch('/estates.json')
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
        path: '/updateprofile',
        element: <PrivateRoute> <UpdateProfile></UpdateProfile> </PrivateRoute>
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
