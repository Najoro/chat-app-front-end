import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../routes/paths'
import { authService } from '../../services/auth/auth.service'

export const useAuthRegister = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      password: String(formData.get('password') ?? ''),
    }

    if (!payload.name || !payload.email || !payload.password) {
      setError('Please fill in all fields.')
      return
    }

    try {
      setIsLoading(true)
      await authService.register(payload)
      navigate(paths.auth.login)
    } catch {
      setError('Registration failed. Please try again.')
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
