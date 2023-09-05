import React from 'react'

const scope = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
].join(" ")


const SignIn = () => {
  return (
    <>
      <a href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback/google&response_type=code&scope=${scope}`} className='text-green-300 underline'>
        Entrar
      </a>
    </>
  )
}

export default SignIn