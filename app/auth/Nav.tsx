import Link from "next/link"
import Login from "./Login"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
const Nav = async () => {
  const session = await getServerSession(authOptions)
  console.log("session --> ", session);
  
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="font-bold text-xl ">Post it.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user ? <Login /> : <h1>{session.user?.name}</h1>}
      </ul>
    </nav>
  )
}

export default Nav
