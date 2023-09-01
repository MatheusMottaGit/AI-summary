import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  id: string
  name: string
  email: string
  avatarUrl: string
}

export default function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)
  return user
}