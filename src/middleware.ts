import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/auth/callback') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const isFirstVisit = !req.cookies.get('hasVisited')
  const isEntryPage = pathname === '/entry'
  const isAuthPage = pathname.startsWith('/auth')

  if (isFirstVisit && !isEntryPage) {
    const res = NextResponse.redirect(new URL('/entry', req.url))
    res.cookies.set('hasVisited', 'true', { path: '/' })
    return res
  }

  if (token && pathname === '/auth/login') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const isAllowedWithoutLogin = isEntryPage || isAuthPage || pathname === '/'

  if (!token && !isAllowedWithoutLogin) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    // ...
  } catch (err) {
    const res = NextResponse.redirect(new URL('/auth/login', req.url))
    res.cookies.delete('next-auth.session-token')
    return res
  }

  return NextResponse.next()
}