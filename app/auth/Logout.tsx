'use client'

import Image from "next/image"
import { signOut } from "next-auth/react"
import Link from "next/link"

type User = {
  image: string
}

const Logout = ({ image }: User) => {
  return (
    <li className="flex items-center gap-8">
      <button className="text-sm bg-blue-500 text-white py-2 px-6 rounded-xl disabled:opacity-25" onClick={() => signOut()}>
        Logout
      </button>
      <Link href="/dashboard">
        <Image className="rounded-full" src={image} width={64} height={64} alt={"user-img"}/>
      </Link>
    </li>
  )
}

export default Logout
