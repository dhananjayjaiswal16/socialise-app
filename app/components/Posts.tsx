"use client"

import Post from "./Post"
import {PostType} from "../types/Posts"
import Spinner from "./Spinner"

type Data = {
  data: PostType[] | undefined
}

const Posts = ({data} : Data) => {
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
          comment={post.comment}
        />
      ))}
    </>
  )
}

export default Posts