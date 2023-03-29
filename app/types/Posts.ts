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

export type SinglePost = {
  id: string,
  name: string,
  avatar: string,
  title: string,
  comment?: {
    id: string,
    postId: string,
    userId: string
  }[]
}