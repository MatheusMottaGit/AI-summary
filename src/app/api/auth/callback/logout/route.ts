import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUrl = new URL('/sign', request.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-cookie': `token=; Path=/; max-age=0'`
    }
  })
}