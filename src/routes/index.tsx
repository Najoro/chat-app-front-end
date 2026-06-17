import { createBrowserRouter, Navigate } from 'react-router-dom'
import RegisterPage from '../pages/auth/RegisterPage'
import { AuthLayout } from '../layouts/AuthLayout'
import IndexPage from '../pages/index/IndexPage'
import LoginPage from '../pages/auth/LoginPage'
import { IndexLayout } from '../layouts/IndexLayout'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexLayout/>,
    children: [
      {
        path: '',
        element: <IndexPage />,
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/register" replace />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      }
    ]
  }
])
