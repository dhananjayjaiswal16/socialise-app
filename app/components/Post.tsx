"use client"

import { theme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { SinglePost } from "../types/Posts"

const Post = ({avatar, name, title, id, comment}: SinglePost) => {
  console.log("Comments ", comment);
  
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
      <div className="flex- gap-4 items-center cursor-pointer">
        <Link href={`/post/${id}`}>
            <span className="text-sm font-bold">
              {comment?.length} Comments
            </span>
        </Link>
      </div>
    </div>
  )
}

export default Post;
