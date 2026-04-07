import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'nmbts_admin';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/dashboard/login') {
    return NextResponse.next();
  }

  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
