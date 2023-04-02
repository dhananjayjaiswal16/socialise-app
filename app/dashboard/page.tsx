import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MyPosts from "./MyPosts";
import { AuthPosts } from "../types/MyPosts";
async function getMyPosts() {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.BASE_URL}/api/posts/myPosts`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session: session
    }),
    cache: 'no-store'
  });
  return res.json();
}

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  
  if(!session){
    redirect("/api/auth/signin")
  }
  const data: AuthPosts = await getMyPosts();
  
  return(
    <main>
      <h1 className="text-2xl">Welcome back {session?.user?.name}</h1>
      <MyPosts data={data} />
    </main>
  )
}

export default Dashboard;