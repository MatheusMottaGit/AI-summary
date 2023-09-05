import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { cookies } from 'next/headers'
import Profile from './Profile'
import SignIn from './SignIn'

const Header = () => {
  const isAuthenticated = cookies().has('token')

  return (
    <header className='h-16 w-screen px-4 flex items-center justify-between'>
      <Logo />

      <ul className='mr-2 flex items-center gap-5 text-xs text-zinc-50/90'>
        <Link href='/'>
          <li className={`p-2 rounded-md hover:bg-zinc-700 hover:transition-colors`}>
            Dashboard
          </li>
        </Link>

        <Link href='/generate'>
          <li className={`p-2 rounded-md hover:bg-zinc-700 hover:transition-colors`}>
            Novo arquivo
          </li>
        </Link>

        {isAuthenticated ? <Profile /> : <SignIn />}
      </ul>
    </header>
  )
}

export default Header