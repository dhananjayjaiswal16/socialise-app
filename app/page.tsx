import AddPost from "./components/AddPost"
import Posts from "./components/Posts"
import Spinner from "./components/Spinner";
import { PostType } from "./types/Posts"

async function getPosts() {
  const res = await fetch(`http://localhost:3000/api/posts/getPost`, {
    cache: "no-store",
  });
  // console.log(res);
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
