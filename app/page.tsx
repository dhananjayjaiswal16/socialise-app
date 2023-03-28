import axios from "axios"
import AddPost from "./components/AddPost"

const allPosts = async () => {
  const res = await axios.get("/api/posts/getPost")
  return res.data;
}

const Home = async () => {
  return (
    <main>
      <AddPost />
    </main>
  )
}

export default Home
