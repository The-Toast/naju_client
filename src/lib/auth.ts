import { type NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_AUTH_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const kakao = profile as any
        const kakaoId = String(kakao.id ?? '')
        const nickname = kakao.properties?.nickname ?? ''
        const profileImage = kakao.properties?.profile_image ?? ''
        const email = kakao.kakao_account?.email ?? ''

        await prisma.user.upsert({
          where: { kakaoId },
          update: { email },
          create: { kakaoId, email, nickname, profileImage },
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
      if (!token?.id) return session

      const user = await prisma.user.findUnique({
        where: { kakaoId: token.id as string },
      })

      if (user && session.user) {
        session.user.id = user.kakaoId
        session.user.name = user.nickname
        session.user.email = user.email
        session.user.image = user.profileImage
      }

      return session
    },

    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
}