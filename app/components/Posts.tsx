"use client"

import Post from "./Post"
import {PostType} from "../types/Posts"
import Spinner from "./Spinner"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

type Data = {
  data: PostType[] | undefined,
  userId: string
}

const Posts = ({data, userId} : Data) => {
  const router = useRouter()
  useEffect(() => {
    router.refresh()
  },[])
  console.log("Data in Postssss==>> ", data);
  if(!data){
    return <Spinner />
  }
  
  return (
    <>
      {data?.map((post) => (
        <Post 
          key={post.id} 
          avatar={post.user.image} 
          title={post.title} 
          name={post.user.name} 
          id={post.id}
          likes={post.likes}
          comment={post.comment}
          userId={userId}
          createdAt={post.createdAt}
        />
      ))}
    </>
  )
}

export default Posts