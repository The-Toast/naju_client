import "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      name?: string
      email?: string
      image?: string
      phoneNumber?: string
    }
    expires: string
    accessToken?: string
    accessTokenExpires?: number
    refreshToken?: string
    refreshTokenExpires?: number
    error?: "RefreshAccessTokenError"
  }

  interface User {
    id?: string
    name?: string
    email?: string
    image?: string
    phoneNumber?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    name: string
    email?: string
    picture?: string
    phoneNumber?: string
    accessToken?: string
    accessTokenExpires?: number
    refreshToken?: string
    refreshTokenExpires?: number
    exp: number
    error?: "RefreshAccessTokenError"
  }
}