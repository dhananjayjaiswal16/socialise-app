import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
    try {
      const posts = await prisma.post.findMany({
        include: {
          user: true,
          likes: true,
          comment: true,
        },
        orderBy: {
          createdAt: "desc"
        }
      })
      return res.status(200).json(posts)
    } catch (error) {
      if(error instanceof Error)
      return res.status(403).json({
        err: "Error occured while fetching posts",
        errMsg: error.message
      })
    }
}