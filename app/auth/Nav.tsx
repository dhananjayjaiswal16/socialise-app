import Link from "next/link"
import Login from "./Login"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import Logout from "./Logout"
import ThemeToggler from "../components/ThemeToggler"
// import { useState, useEffect } from "react"

const Nav = async () => {
  const session = await getServerSession(authOptions)
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="font-bold text-xl">Post it.</h1>
      </Link>
      <ThemeToggler />
      <ul className="flex items-center gap-6">
        {!session?.user ? <Login /> : <Logout image={session?.user?.image || ""} />}
      </ul>
    </nav>
  )
}

export default Nav
