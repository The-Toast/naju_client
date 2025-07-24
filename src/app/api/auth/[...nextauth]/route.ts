import NextAuth, { type NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import { prisma } from 'lib/prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const kakao = profile as any
        const kakaoId = String(kakao.id ?? '') // ✅ 형변환 필수
        const nickname = kakao.properties?.nickname ?? ''
        const profileImage = kakao.properties?.profile_image ?? ''
        const email = kakao.kakao_account?.email ?? ''

        await prisma.user.upsert({
          where: { kakaoId },
          update: { email, nickname, profileImage },
          create: { kakaoId, email, nickname, profileImage }
        })

        token.id = kakaoId
        token.name = nickname
        token.picture = profileImage
        token.email = email
        token.phoneNumber = kakao.kakao_account?.phone_number
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        ;(session.user as any).phoneNumber = token.phoneNumber
      }

      session.accessToken = token.accessToken
      return session
    },

    async redirect({ baseUrl }) {
      return baseUrl
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }