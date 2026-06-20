export type LoginDto = {
  email: string
  password: string
}

export type LoginResponseDto = {
  user: {
    username: string
    email: string
  }
  access_token: string
}
