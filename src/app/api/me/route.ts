import { NextResponse, type NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const token = await getToken({
    req: req as unknown as NextRequest,
    secret: process.env.NEXTAUTH_SECRET
  })

  if (!token?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { kakaoId: token.id as string },
    select: {
      id: true,
      kakaoId: true,
      email: true,
      nickname: true,
      profileImage: true,
      createdAt: true
    }
  })

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user)
}