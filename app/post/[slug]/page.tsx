import Post from "../../components/Post";
import { PostType } from "../../types/Posts"
import AddComment from "../../components/AddComment"
import AllComments from "../../components/AllComments";

const fetchPostDetails = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}

const PostDetail = async (url: { 
  params: { 
    slug: string 
  } 
}) => {
  const data: PostType = await fetchPostDetails(url.params.slug);
  return(
    <>
      <Post 
        id={data?.id} 
        avatar={data?.user?.image} 
        name={data?.user.name} 
        title={data?.title} 
        comment={data?.comment} 
      />
      <AddComment id={data.id} />
      <AllComments data={data} />
    </>
  )
}

export default PostDetail;