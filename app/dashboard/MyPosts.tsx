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
      {data?.post?.length === 0
      ? <div className="flex items-center justify-center my-7">
          <h3 className="text-3xl font-bold">404 | You haven't created a post yet!</h3>
        </div>
      : data?.post?.map((post) => 
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
