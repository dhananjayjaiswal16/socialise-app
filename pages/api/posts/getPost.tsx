import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next";

import prisma from "../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
    try {
      const session = await getServerSession(req, res, authOptions)
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