import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignora arquivos internos e assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return
  }

  // Se acessar "/", redireciona para /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }
}

export const config = {
  matcher: ['/'],
}
