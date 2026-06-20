import { api, endpoint } from '../../api/api'
import type { RegisterPayload } from './dto/registerPaylod'


export class authService {

  static async register(paylod: RegisterPayload){
    const response = await api.post(endpoint.auth.register, paylod)
    return response.data;
  }
}