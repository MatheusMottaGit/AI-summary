import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CheckCheck, Pencil } from 'lucide-react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const TitleAndFileName = () => {
  return (
    <div className='flex items-center justify-between gap-2'>
      <h1 className='font-bold text-2xl text-zinc-50'>Gerar novo arquivo</h1>

      <Popover>
        <PopoverTrigger>
          <Button className='bg-zinc-800 border border-zinc-600 text-zinc-300 gap-2 hover:bg-zinc-700'>
            <Pencil size={15} />
            Nome do arquivo
          </Button>
        </PopoverTrigger>

        <PopoverContent className='bg-zinc-800 flex flex-col w-96 gap-2 mr-4'>
          <form className='grid gap-3'>
            <div className='flex gap-3 items-center text-zinc-100'>
              <Label>Nome</Label>

              <Input
                required
                placeholder='Evite espaços ou outros caracteres...'
                className='col-span-2'
              />
            </div>

            <Button>
              Definir nome
              <CheckCheck size={15} />
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default TitleAndFileName