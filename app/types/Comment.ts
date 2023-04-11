export type CommentType = {
  id: string,
  message: string,
  postId: string,
  userId: string,
  createdAt: string
  user: {
    id: string,
    name: string,
    email: string,
    image: string
  }
}