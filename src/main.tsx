import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { router } from './routes'
import { paths } from './routes/paths'
import { authService } from './services/auth/auth.service'
import { LocalStore } from './store/Local.store'

const isAuthRoute = (pathname: string) => pathname.startsWith('/auth')
const isProtectedRoute = (pathname: string) => pathname.startsWith('/chat')

let activeVerificationId = 0

const verifyCurrentRoute = async (pathname: string) => {
  const token = LocalStore.getAccessToken()

  if (!token) {
    if (isProtectedRoute(pathname)) {
      await router.navigate(paths.auth.index, { replace: true })
    }
    return
  }

  const verificationId = ++activeVerificationId

  try {
    await authService.verifyToken(token)

    if (verificationId !== activeVerificationId) {
      return
    }

    if (isAuthRoute(pathname)) {
      await router.navigate(paths.chat.home, { replace: true })
    }
  } catch {
    if (verificationId !== activeVerificationId) {
      return
    }

    LocalStore.clearAuth()

    if (isProtectedRoute(pathname)) {
      await router.navigate(paths.auth.index, { replace: true })
    }
  }
}

void verifyCurrentRoute(router.state.location.pathname)

router.subscribe((state) => {
  void verifyCurrentRoute(state.location.pathname)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
