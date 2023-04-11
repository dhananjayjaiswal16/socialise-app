'use client'
import { useRouter } from "next/navigation";
import { AuthPosts } from "../types/MyPosts";
import EditPost from "./EditPost";
import { useEffect } from "react";

type Data = {
  data: AuthPosts | undefined
}
const MyPosts = ({data} : Data) => {
  const router = useRouter()
  useEffect(() => {
    router.refresh()
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
