'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <li className="list-none">
      <button className="text-sm bg-blue-500 text-white py-2 px-6 rounded-xl disabled:opacity-25" onClick={() => signIn()}>
        Login
      </button>
    </li>
  )
}

export default Login;
