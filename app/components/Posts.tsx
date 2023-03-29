"use client"

import Post from "./Post"
import {PostType} from "../types/Posts"
type Data = {
  data: PostType[] | undefined
}
const Posts = ({ data }: Data) => {
  
  return (
    <>
      {data?.map((post) => (
        <Post 
          key={post.id} 
          avatar={post.user.image} 
          postTitle={post.title} 
          name={post.user.name} 
          id={post.id}
          comment={post.comment}
        />
      ))}
    </>
  )
}

export default Posts
