import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from 'lib/auth'

export async function POST() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  return NextResponse.redirect('/auth/login', {
    status: 302,
    headers: {
      'Set-Cookie': `next-auth.session-token=deleted; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  })
}