import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { cookies } from 'next/headers'
import Profile from './Profile'
import SignIn from './SignIn'

const pages = [
  { path: '/', pageName: 'Dashboard' },
  { path: '/generate', pageName: 'Novo Arquivo' }
]

const Header = () => {
  const isAuthenticated = cookies().has('token')

  return (
    <header className='h-16 w-screen px-4 flex items-center justify-between'>
      <Logo />

      <ul className='mr-2 flex items-center gap-5 text-xs text-zinc-50/90'>
        {
          pages.map((page) => (
            <Link href={page.path}>
              <li className={`p-2 rounded-md hover:bg-zinc-700 hover:transition-colors`}>
                {page.pageName}
              </li>
            </Link>
          ))
        }

        {isAuthenticated ? <Profile /> : <SignIn />}
      </ul>
    </header>
  )
}

export default Header