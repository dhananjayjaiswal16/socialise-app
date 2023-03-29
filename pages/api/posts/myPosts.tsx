import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

import prisma from "../../../prisma/client";
export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
  if(req.method === "GET"){
    const session = await getServerSession(req, res, authOptions)
    try {
      const posts = await prisma.user.findUnique({
        where: {
          email: session?.user?.email
        },
        include: {
          post: {
            orderBy: {
              createdAt: "desc"
            },
            include: {
              comment: true
            }
          }
        }
      })
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(403).json({
        err: "Error occured while fetching user's posts",
        errMsg: error.message
      })
    }
  }
}