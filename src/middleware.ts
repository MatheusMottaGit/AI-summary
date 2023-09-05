import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  const dashboard = new URL('/', request.url)
  const sign = new URL('/sign', request.url)

  if (!token) {
    return NextResponse.redirect(sign)
  }
}

export const config = {
  matcher: [
    '/dashboard', '/sign', '/generate'
  ]
}