'use client'

import axios from "axios";
import { useEffect, useState } from "react"
import { AuthPosts } from "../types/MyPosts";
import EditPost from "./EditPost";

const MyPosts = () => {
  const [data, setData] = useState<AuthPosts>();
  useEffect(() => {
    const allPosts = async () => {
      try {
        const res = await axios.get("/api/posts/myPosts")
        setData(res.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    allPosts();
  },[])
  
  return (
    <div>
      {data?.post?.map((post) => 
        <EditPost 
          key={post.id}
          id={post.id}
          name={data.name}
          avatar={data.image}
          comment={post.comment}
          title={post.title}
        />
      )}
    </div>
  )
}

export default MyPosts
