import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client";

type ReqBody = {
  title: string,
  postId: string
}

export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
  if(req.method === "POST"){
    const session = await getServerSession(req, res, authOptions)
    if(!session){
      return res.status(401).json({
        message: "Please login to comment!"
      })
    }
    const {title, postId}: ReqBody = req.body; 
    if(title.length > 300){
      return res.status(403).json({
        message: "Please write a comment of less than 300 words!"
      }) 
    }

    const prismaUser = await prisma.user.findUnique({
      where: {email: session?.user?.email}
    })

    try {
      const result = await prisma.comment.create({
        data: {
          message: title,
          postId: postId,
          userId: prismaUser?.id
        }
      })
      return res.status(200).json(result)
    } catch (error) {
      if(error instanceof Error)
      return res.status(403).json({
        err: "Error occured while creating the post",
        errMsg: error.message
      })
    }
  }
}