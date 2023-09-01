import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useTranscription } from '@/hooks/useTranscription'

const PromptForm = () => {

  const { getVideoTranscription } = useTranscription()

  return (
    <form onSubmit={getVideoTranscription}>
      <Textarea
        placeholder='Insira instruções para ter uma melhor experiência...'
        name='textarea'
      />

      <Button type='submit' className='w-full mt-2'>
        Gerar resumo
      </Button>
    </form>
  )
}

export default PromptForm