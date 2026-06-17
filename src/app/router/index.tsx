import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RegisterPage } from '../../features/auth/pages/RegisterPage'
import { AuthLayout } from '../../layouts/AuthLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/register" replace />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
])
