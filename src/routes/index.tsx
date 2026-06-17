import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/auth/RegisterPage'
import { AuthLayout, type AuthLayoutConfig } from '../layouts/AuthLayout'
import IndexPage from '../pages/index/IndexPage'
import AuthIndexPage from '../pages/auth/IndexPage'
import LoginPage from '../pages/auth/LoginPage'
import { IndexLayout } from '../layouts/IndexLayout'

const registerAuthLayout: AuthLayoutConfig = {
  introEyebrow: 'Create account',
  mobileEyebrow: 'Create account',
  introTitle: 'Build your place in the conversation.',
  introDescription:
    'Create your profile, pick your identity, and step into a cleaner messaging experience designed for both speed and comfort.',
  featureCards: [
    {
      title: 'Fast',
      description: 'A simple onboarding flow that feels native on wide screens.',
      classes: 'bg-white/6',
    },
    {
      title: 'Clean',
      description: 'Balanced spacing and readable forms for desktop and mobile.',
      classes: 'bg-black/15',
    },
  ],
}

const loginAuthLayout: AuthLayoutConfig = {
  introEyebrow: 'Welcome back',
  mobileEyebrow: 'Welcome back',
  introTitle: 'Return to your conversations.',
  introDescription:
    'Log in to continue chatting, reconnect with your contacts, and pick up where you left off.',
  featureCards: [
    {
      title: 'Secure',
      description: 'Clean authentication fields that stay focused on your input.',
      classes: 'bg-white/6',
    },
    {
      title: 'Smooth',
      description: 'A calm desktop layout with balanced spacing and clear hierarchy.',
      classes: 'bg-black/15',
    },
  ],
}

const authIndexLayout: AuthLayoutConfig = {
  introEyebrow: 'Get started',
  mobileEyebrow: 'Get started',
  introTitle: 'Connect friends easily and quickly.',
  introDescription:
    'Choose how you want to continue and step into a cleaner, calmer chat experience across all your devices.',
  showBackButton: false,
  featureCards: [
    {
      title: 'Social',
      description: 'Start quickly with familiar providers and a lightweight flow.',
      classes: 'bg-white/6',
    },
    {
      title: 'Direct',
      description: 'Use email to create your account or jump back into Chatbox.',
      classes: 'bg-black/15',
    },
  ],
}

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
       path: 'index',
        element: <AuthIndexPage />,
        handle: {
          authLayout: authIndexLayout,
        },
      },
      {
        path: 'register',
        element: <RegisterPage />,
        handle: {
          authLayout: registerAuthLayout,
        },
      },
      {
        path: 'login',
        element: <LoginPage />,
        handle: {
          authLayout: loginAuthLayout,
        },
      }
    ]
  }
])
