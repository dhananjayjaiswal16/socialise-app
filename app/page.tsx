"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import AddPost from "./components/AddPost"
import Posts from "./components/Posts"

const Home = () => {
  const [data, setData] = useState();
  
  useEffect(() => {
    const allPosts = async () => {
      try {
        const res = await axios.get("/api/posts/getPost")
        setData(res.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    allPosts();
  },[])
  
  return (
    <main>
      <AddPost />
      <Posts data={data} />
    </main>
  )
}

export default Home
