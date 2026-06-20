type StoredUser = {
  username: string
  email: string
}

const STORAGE_KEYS = {
  accessToken: 'access_token',
  user: 'user',
} as const

export class LocalStore {
  static setAccessToken(token: string) {
    localStorage.setItem(STORAGE_KEYS.accessToken, token)
  }

  static getAccessToken() {
    return localStorage.getItem(STORAGE_KEYS.accessToken)
  }

  static removeAccessToken() {
    localStorage.removeItem(STORAGE_KEYS.accessToken)
  }

  static setUser(user: StoredUser) {
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user))
  }

  static getUser(): StoredUser | null {
    const user = localStorage.getItem(STORAGE_KEYS.user)

    if (!user) {
      return null
    }

    try {
      return JSON.parse(user) as StoredUser
    } catch {
      return null
    }
  }

  static removeUser() {
    localStorage.removeItem(STORAGE_KEYS.user)
  }

  static clearAuth() {
    this.removeAccessToken()
    this.removeUser()
  }
}
