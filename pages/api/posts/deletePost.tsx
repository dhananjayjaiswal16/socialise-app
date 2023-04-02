import prisma from "../../../prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,res: NextApiResponse
) {
    const postId: string = req.body.postId;
    try {
      const session = await getServerSession(req, res, authOptions)
      if(!session){
        return res.status(401).json({
          message: "Please login to delete a post!"
        })
      }
      
      const post = await prisma.post.findUnique({
        where: { id: postId },
        select: { userId: true },
      });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (post.userId !== session?.user?.id) {
        return res.status(403).json({ message: "Forbidden" });
      }

      const result = await prisma.post.delete({
        where: {
          id: postId,
        },
      });

      return res.status(200).json(result)
    } catch (error) {
      return res.status(403).json({
        err: `Error occured while deleting post id: ${postId}`,
        errMsg: error.message
      })
  }
}