import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // allow these paths unconditionally
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
  const isLoginPage = pathname === '/auth/login'

  // First time visit — redirect to /entry unless already on /entry
  if (isFirstVisit && !isEntryPage) {
    const res = NextResponse.redirect(new URL('/entry', req.url))
    res.cookies.set('hasVisited', 'true', { path: '/' })
    return res
  }

  // If logged in, don't allow entry or login page
  if (token && (isEntryPage || isLoginPage)) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // If not logged in, only allow /entry and /auth/login
  const isAllowedWithoutLogin = isEntryPage || isLoginPage
  if (!token && !isAllowedWithoutLogin) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return NextResponse.next()
}