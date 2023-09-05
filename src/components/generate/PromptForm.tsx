import React from 'react'
import { CheckCheck } from 'lucide-react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const PromptForm = () => {
  return (
    <form>
      <Textarea
        placeholder='Insira instruções para ter uma melhor experiência...'
        name='textarea'
      />

      <Button type='submit' className='w-full mt-2'>
        Gerar resumo
        <CheckCheck size={15} />
      </Button>
    </form>
  )
}

export default PromptForm