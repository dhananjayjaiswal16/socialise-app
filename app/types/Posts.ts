export type PostType = {
  id: string
  title: string
  updatedAt?: string
  user: {
    image: string
    name: string
  }
  comment?: {
    createdAt?: string
    id: string
    postId: string
    message: string
    userId: string
  }[]
}
