import { authOptions } from "../pages/api/auth/[...nextauth]";
import AddPost from "./components/AddPost"
import Posts from "./components/Posts"
import { PostType } from "./types/Posts"
import { getServerSession } from "next-auth";
async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/getPost`, {
    cache: "no-store",
  });
  return res.json();
}

const Home = async () => {
  const session = await getServerSession(authOptions);
  const userId: string = session?.user?.id;
  const data: PostType[] = await getPosts();
  
  return (
    <main>
      <AddPost />
      <Posts data={data} userId={userId} />
    </main>
  )
}

export default Home
