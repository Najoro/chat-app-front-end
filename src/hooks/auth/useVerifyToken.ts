import { useState } from 'react'
import { authService } from '../../services/auth/auth.service'
import { LocalStore } from '../../store/Local.store'

export const useVerifyToken = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const verifyToken = async () => {
    const token = LocalStore.getAccessToken()

    if (!token) {
      setError('No token found.')
      return null
    }

    try {
      setIsLoading(true)
      setError('')
      const response = await authService.verifyToken(token)
      return response
    } catch {
      setError('Token verification failed.')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    error,
    verifyToken,
  }
}
