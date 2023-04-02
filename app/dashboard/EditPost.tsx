"use client"
import { SinglePost } from "../types/Posts"
import Image from "next/image"
import { theme } from "@nextui-org/react"
import { useState } from "react"
import CustomModal from "../components/Modal"
import { useRouter } from "next/navigation"

const EditPost = ({ avatar, name, title, comment, id } : SinglePost) => {
  const [visible, setVisible] = useState<boolean>(false);
  const router = useRouter();
  const closeHandler = () => {
    setVisible(false);
  };
  const deletePost = async (postId: string) => {
    try {
      const res = await fetch("/api/posts/deletePost", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });
      console.log("res.data ---> ", res);
      
      if (res.ok) {
        closeHandler();
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  }; 
  return (
    <>
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
            <button className="font-bold text-red-500" onClick={() => setVisible(true)} >Delete</button>
          </div>
      </div>
      
      <CustomModal id={id} visible={visible} closeHandler={closeHandler} deletePost={deletePost} />
    </>
  )
}

export default EditPost
