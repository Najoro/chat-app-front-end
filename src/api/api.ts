import axios from 'axios'

export const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
})

export const endpoint = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    verifyToken: '/auth/verify-token',
  },
}
