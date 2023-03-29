import type { NextApiRequest, NextApiResponse } from "next"

import prisma from "../../../prisma/client";
export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
  if(req.method === "GET"){
    try {
      const posts = await prisma.post.findMany({
        include: {
          user: true,
          comment: true,
        },
        orderBy: {
          createdAt: "desc"
        }
      })
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(403).json({
        err: "Error occured while fetching posts",
        errMsg: error.message
      })
    }
  }
}