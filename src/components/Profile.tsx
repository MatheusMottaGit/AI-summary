import React from 'react'
import Image from 'next/image'
import { LogOut, LucideSettings2, User2Icon, Bell } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { cookies } from 'next/headers'
import { api } from '@/lib/api'
import { User } from '@/types/user'

const Profile = async () => {
  const token = cookies().get('token')?.value

  const userResponse = await api.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const user: User = userResponse.data.user
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={user.avatarUrl}
            alt=''
            width={40}
            height={40}
            className='w-8 h-8 rounded-full ml-6'
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className='mr-2'>
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User2Icon size={15} />
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell size={15} />
            Notificações
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LucideSettings2 size={15} />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='text-red-400 focus:text-red-500'>
            <LogOut size={15} />
            <a href="/api/auth/callback/logout">Sair</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Profile