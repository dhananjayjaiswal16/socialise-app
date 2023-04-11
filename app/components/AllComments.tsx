"use client"
import { theme } from "@nextui-org/react"
import Image from "next/image"
import { formatDate } from "../../utils";
import { PostType } from "../types/Posts";

const AllComments = ({data}: {data: PostType}) => {
  return (
    <div>
      {data.comment?.map((singleComment) => (
        <div key={singleComment.id} style={{ backgroundColor: `${theme.colors.gray100}` }} className="my-8 p-8 rounded-lg">
          <div className="flex items-center gap-2">
            <Image 
              className="rounded-full"
              width={64}
              height={64}
              src={singleComment?.user?.image}
              alt="avatar"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold my-0">{singleComment?.user?.name}</h3>
              <h2 className="text-sm my-0">{formatDate(singleComment?.createdAt)}</h2>
            </div>
          </div>
          <div className="py-4">{singleComment?.message}</div>
        </div>
      ))}
    </div>
  )
}

export default AllComments
