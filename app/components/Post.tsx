"use client"

import { theme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { SinglePost } from "../types/Posts"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useState } from "react"
import { Loading } from "@nextui-org/react"
const HeartIcon = ({ fill, onClick }: { fill: boolean; onClick: Function }) => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      style={{ cursor: "pointer" }}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill ? "#F31260" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill || hover ? "#F31260" : "#9ba1a6"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Post = ({avatar, name, title, id, comment, likes, userId}: SinglePost) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [fill, setFill] = useState(false);
  const currentUserLiked = (likes?.some((like) => like.userId === userId)) || false;
  let toastId: string;
  console.log("Likes ", likes)
  const addLike = async (id: string) => {
    setLoading(true)
    try {
      const res = await fetch("/api/posts/addLike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: id,
        }),
      });
      if(!res.ok){
        const { message } = await res.json()
        toast.error(message, {id: toastId});
      }
      if (res.ok) {
        setFill(!fill)
        router.refresh();
      }
      setLoading(false);
    } catch {
      setLoading(false)
      toast.error("Error liking post", {id: toastId});
    }
  };
  
  return (
    <div style={{ backgroundColor: `${theme.colors.gray100}` }} className="my-8 p-8 rounded-lg">
      <div className="flex items-center gap-2">
        <Image 
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="avatar"
        />
        <h3 className="font-bold">{name}</h3>
      </div>
      <div className="my-8">
        <span className="break-all">{title}</span>
      </div>
      <div className="flex gap-4 items-center cursor-pointer">
        <Link href={`/post/${id}`}>
            <span className="text-sm font-bold">
              {comment?.length} Comments
            </span>
        </Link>
        <div className="flex gap-1">
          {likes?.length} 
          {loading ? (
            <Loading size="sm" color="error" />
          ) : (
            <HeartIcon
              fill={currentUserLiked}
              onClick={() => addLike(id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Post;
