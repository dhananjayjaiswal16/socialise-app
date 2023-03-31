import { SinglePost } from "../types/Posts"
import Image from "next/image"
import { theme } from "@nextui-org/react"

const EditPost = ({ avatar, name, title, comment, id } : SinglePost) => {

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
        <div className="flex items-center gap-4"> 
          <span className="text-sm font-bold">{comment?.length} Comments</span>
          <button className="font-bold text-red-500" >Delete</button>
        </div>
    </div>
  )
}

export default EditPost
