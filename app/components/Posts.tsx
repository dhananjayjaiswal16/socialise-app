"use client"

import Post from "./Post"

const Posts = ({ data }) => {
  
  return (
    <>
      {data?.map((post) => (
        <Post key={post.id} avatar={post.user.image} postTitle={post.title} name={post.user.name} id={post.id} />
      ))}
    </>
  )
}

export default Posts
