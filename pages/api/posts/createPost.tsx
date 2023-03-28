import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client";
export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
  if(req.method === "POST"){
    const session = await getServerSession(req, res, authOptions)
    if(!session){
      return res.status(401).json({
        message: "Please login to create a post!"
      })
    }
    const title: string = req.body.title; 
    if(title.length > 300){
      return res.status(403).json({
        message: "Please write a post of less than 300 words!"
      }) 
    }

    const prismaUser = await prisma.user.findUnique({
      where: {email: session?.user?.email}
    })

    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id,
        }
      })
      return res.status(200).json(result)
    } catch (error) {
      return res.status(403).json({
        err: "Error occured while creating the post",
        errMsg: error.message
      })
    }
  }
}