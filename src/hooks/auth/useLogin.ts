import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../routes/paths'
import { authService } from '../../services/auth/auth.service'
import { LocalStore } from '../../store/Local.store'

export const useLogin = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.currentTarget)
    const payload = {
      email: String(formData.get('email') ?? '').trim(),
      password: String(formData.get('password') ?? ''),
    }

    if (!payload.email || !payload.password) {
      setError('Please fill in all fields.')
      return
    }

    try {
      setIsLoading(true)
      const response = await authService.login(payload)
      LocalStore.setAccessToken(response.access_token)
      LocalStore.setUser(response.user)
      navigate(paths.chat.home)
    } catch {
      setError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    error,
    handleSubmit,
  }
}
