import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from 'lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const data = await req.formData()
  const file = data.get('file') as File

  if (!file) {
    return NextResponse.json({ error: '파일이 없습니다.' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  await mkdir(uploadDir, { recursive: true })
  const filePath = path.join(uploadDir, file.name)

  await writeFile(filePath, buffer)
  const imageUrl = `/uploads/${file.name}`

  // 👇 DB 반영
  await prisma.user.update({
    where: { kakaoId: session.user.id }, // 혹은 다른 기준
    data: { profileImage: imageUrl }
  })

  return NextResponse.json({ url: imageUrl })
}