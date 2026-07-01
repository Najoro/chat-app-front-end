import { api, endpoint } from '../../api/api'
import type { LoginDto, LoginResponseDto } from './dto/login.dto'
import type { RegisterDto } from './dto/register.dto'

export class authService {
  static async register(payload: RegisterDto) {
    const response = await api.post(endpoint.auth.register, payload)
    return response.data
  }

  static async login(payload: LoginDto): Promise<LoginResponseDto> {
    const response = await api.post(endpoint.auth.login, payload)
    return response.data
  }

  static async verifyToken(token: string) {
    const response = await api.get(endpoint.auth.verifyToken, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }
}
