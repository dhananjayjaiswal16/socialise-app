import { LikeType } from "./Like"

export type AuthPosts = {
  email: string
  id: string
  image: string
  name: string
  post: {
    createdAt: string
    id: string
    title: string
    comment?: {
      createdAt: string
      id: string
      postId: string
      message: string
      userId: string
    }[],
    likes?: LikeType[]
  }[]
}