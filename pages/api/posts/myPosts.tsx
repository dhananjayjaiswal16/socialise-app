import type { NextApiRequest, NextApiResponse } from "next"

import prisma from "../../../prisma/client";
export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
    const email: string = req.body.session?.user?.email
    try {
      const posts = await prisma.user.findUnique({
        where: {
          email: email
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