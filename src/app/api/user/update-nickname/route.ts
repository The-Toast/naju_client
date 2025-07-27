import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from 'lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { nickname } = await req.json()

  if (!nickname || typeof nickname !== 'string') {
    return NextResponse.json({ error: '닉네임이 유효하지 않습니다.' }, { status: 400 })
  }

  await prisma.user.update({
    where: { kakaoId: session.user.id },
    data: { nickname },
  })

  return NextResponse.json({ success: true })
}