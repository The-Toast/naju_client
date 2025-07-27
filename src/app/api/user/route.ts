import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { prisma } from 'lib/prisma'
import { validateUserUpdate } from 'utils/validation'

export async function PUT(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { nickname, profileImage } = body

    const validationError = validateUserUpdate({ nickname, profileImage })
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      )
    }

    const updatedUser = await prisma.user.update({
      where: { kakaoId: token.id as string },
      data: {
        ...(nickname && { nickname }),
        ...(profileImage && { profileImage })
      },
      select: {
        kakaoId: true,
        nickname: true,
        profileImage: true,
        email: true
      }
    })

    return NextResponse.json(updatedUser)

  } catch (error) {
    console.error('[USER_UPDATE_ERROR]', error)

    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  if (!token?.id) {
    return NextResponse.json(
      { success: false, message: 'Login required.' },
      { status: 401 }
    )
  }

  try {
    // Find user by kakaoId to get the internal user id
    const user = await prisma.user.findUnique({
      where: { kakaoId: token.id as string },
      select: { id: true }
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found.'
        },
        { status: 404 }
      )
    }

    await prisma.$transaction([
      prisma.stampRecord.deleteMany({ where: { userId: user.id } }),
      prisma.user.delete({ where: { id: user.id } })
    ])

    return NextResponse.json(
      {
        success: true,
        message: 'Account deletion successful.',
        data: null
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('[ACCOUNT_DELETION_ERROR]', error)

    if (error.code === 'P2025') {
      return NextResponse.json(
        {
          success: false,
          message: 'Account already deleted or does not exist.'
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Server error occurred.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}