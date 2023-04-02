'use client'
import { AuthPosts } from "../types/MyPosts";
import EditPost from "./EditPost";

type Data = {
  data: AuthPosts | undefined
}
const MyPosts = ({data} : Data) => {
  
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
