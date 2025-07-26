import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { prisma } from 'lib/prisma'
import { StampCategory } from 'prisma/client'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const me = searchParams.get('me')
  const missing = searchParams.get('missing')
  const scanId = searchParams.get('scan')
  const category = searchParams.get('category') as StampCategory | null

  // ✅ 1. QR 찍었을 때 인증 처리
  if (scanId) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({ where: { kakaoId: token.id } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const stamp = await prisma.stamp.findUnique({ where: { id: scanId } })
    if (!stamp) return NextResponse.json({ error: 'Stamp not found' }, { status: 404 })

    const exists = await prisma.stampRecord.findFirst({
      where: { userId: user.id, stampId: scanId }
    })

    if (exists) {
      return NextResponse.json({ message: '이미 인증된 스탬프입니다.', stamp: exists })
    }

    const created = await prisma.stampRecord.create({
      data: {
        userId: user.id,
        stampId: scanId
      }
    })

    return NextResponse.json({ message: '스탬프가 등록되었습니다.', stamp: created })
  }

  // ✅ 기존 기능 유지
  if (me === 'true') {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({ where: { kakaoId: token.id } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const count = await prisma.stampRecord.count({
      where: { userId: user.id }
    })

    return NextResponse.json({ count })
  }

  if (missing === 'true') {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({ where: { kakaoId: token.id } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const taken = await prisma.stampRecord.findMany({
      where: { userId: user.id },
      select: { stampId: true }
    })

    const takenIds = taken.map(r => r.stampId)

    const missingStamps = await prisma.stamp.findMany({
      where: {
        id: { notIn: takenIds },
        ...(category ? { category } : {})
      }
    })

    return NextResponse.json(missingStamps)
  }

  const stamps = await prisma.stamp.findMany({
    where: category ? { category } : undefined
  })

  return NextResponse.json(stamps)
}