'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SignIn from './SignIn'
import getUser from '@/lib/auth'
import { cookies } from 'next/headers'

const pages = [
  { pageName: 'Dashboard', url: '/' },
  { pageName: 'Novo arquivo', url: '/generate' },
  { pageName: 'Perfil', url: '/profile' },
]
const Header = async () => {
  const currentUrl = usePathname()

  const { name } = getUser()

  const isAuthenticated = cookies().get('token')?.value
  return (
    <header className='h-16 w-screen px-4 flex items-center justify-between'>
      <Logo />

      <ul className='mr-2 flex items-center gap-5 text-xs text-zinc-500'>
        {
          pages.map(page => (
            <Link href={page.url}>
              <li className={`p-2 rounded-md hover:bg-zinc-50 hover:transition-colors ${page.url === currentUrl ? 'bg-zinc-50' : ''}`}>
                {page.pageName}
              </li>
            </Link>
          ))
        }

        {
          isAuthenticated ? <p>{name}</p> : <SignIn />
        }
      </ul>
    </header>
  )
}

export default Header