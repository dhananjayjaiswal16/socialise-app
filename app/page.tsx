import AddPost from "./components/AddPost"
import Posts from "./components/Posts"
import { PostType } from "./types/Posts"

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/getPost`, {
    cache: "no-store",
  });
  return res.json();
}

const Home = async () => {
  const data: PostType[] = await getPosts();
  
  return (
    <main>
      <AddPost />
      <Posts data={data} />
    </main>
  )
}

export default Home
