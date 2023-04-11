import { CommentType } from "./Comment"
import { LikeType } from "./Like"

export type PostType = {
  id: string
  title: string
  updatedAt?: string
  user: {
    image: string
    name: string
  }
  comment?: CommentType[]
  likes?: LikeType[]
}

export type SinglePost = {
  id: string,
  name: string,
  avatar: string,
  title: string,
  comment?: {
    id: string,
    postId: string,
    userId: string
  }[],
  likes?: LikeType[]
}