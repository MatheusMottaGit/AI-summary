import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const accesTokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
    params: {
      code,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      redirect_uri: 'http://localhost:3000/api/auth/callback/google',
      grant_type: 'authorization_code'
    }
  })

  const { access_token } = accesTokenResponse.data

  const response = await axios.post('http://localhost:3333/auth/', { access_token }, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const { token } = response.data

  const redirectUrl = new URL('/', request.url)

  const cookies_expires_in = 60 * 60 * 24 * 7

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookies_expires_in}`
    }
  })

}