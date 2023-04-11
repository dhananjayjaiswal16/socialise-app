'use client'

import { useState, FormEvent, ChangeEvent } from "react"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Filter from "bad-words";
const filter = new Filter();

const AddComment = ({id}: {id: string}) => {
  const router = useRouter();
  const [comment, setComment] = useState<string>("");
  const [disabled, setDisabled] = useState(true);
  let toastId: string;
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    e.target.value.length===0 || e.target.value.length > 300 ? setDisabled(true) : setDisabled(false) 
  }

  const submitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (filter.isProfane(comment)){
      toast.error("Use of profanity is not allowed on this platform")
      return;
    }
    toastId = toast.loading("Adding your comment", {id: toastId})
    setDisabled(true);
    try {
      const res = await fetch(`/api/posts/addComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: comment,
          postId: id
        }),
        cache: 'no-store'
      });
      if(res.ok){
        toast.success('Comment has been created successfully', {id: toastId});
        setComment('');
        setDisabled(false)
        router.refresh();
      }
    } catch (error) {
      console.log("Error in UI while fetchinf data ", error);
      toast.error("Failed to add comment to this post!", {id: toastId});
    }
  }



  return (
    <>
      <form className="my-8" onSubmit={submitComment}>
        <h3>Add Comments</h3>
        <div className="flex flex-col my-2">
          <input 
            className="text-lg p-4 rounded-lg my-2 placeholder-gray-500 bg-inherit border border-gray-400 focus:outline-none"
            type="text"
            value={comment}
            name="comment"
            onChange={handleCommentChange}
            placeholder="What are you planning to comment on this post?"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
        <span className={`font-bold text-sm ${
          comment.length > 300 && "text-red-600"
        }`}>{comment.length}/300</span>
        <button
          className="text-sm bg-blue-500 text-white py-2 px-4 rounded-xl disabled:opacity-25"
          disabled={disabled}
          type="submit"
        >
          Post
        </button>
      </div>
      </form>
    </>
  )
}

export default AddComment
