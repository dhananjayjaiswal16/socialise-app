import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
    try {
      const result = await prisma.post.findUnique({
        where: {
          id: req.query.details
        },
        include: {
          user: true,
          likes: true,
          comment: {
            orderBy: {
              createdAt: "desc"
            },
            include: {
              user: true
            }
          }
        }
      })
      return res.status(200).json(result);
    } catch (error) {
      if(error instanceof Error)
      return res.status(403).json({
        err: "Error occured while fetching posts",
        errMsg: error.message
      })
    }
}