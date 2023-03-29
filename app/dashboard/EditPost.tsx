import { SinglePost } from "../types/Posts"
import Image from "next/image"
import { theme } from "@nextui-org/react"

const EditPost = ({ avatar, name, title, comment, id } : SinglePost) => {

  return (
    <div style={{ backgroundColor: `${theme.colors.gray100}` }} className="my-8 p-8 rounded-lg">
        <Image 
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="avatar"
        />
        <h3 className="font-bold">{name}</h3>
    </div>
  )
}

export default EditPost
