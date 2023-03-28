'use client'

import React, { useState, FormEvent, ChangeEventHandler, ChangeEvent } from "react"
import axios from "axios";
import toast from "react-hot-toast";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [disabled, setDisabled] = useState(true);
  let toastId: string;
  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    e.target.value.length===0 || e.target.value.length > 300 ? setDisabled(true) : setDisabled(false) 
  }

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    toastId = toast.loading("Creating your post", {id: toastId})
    setDisabled(true);
    try {
      const res = await axios.post("/api/posts/createPost", { title })
      console.log("res ==> ", res.data);
      toast.success('Post has been created successfully', {id: toastId});
      setTitle('');
      setDisabled(false)
    } catch (error) {
      console.log("Error in UI while fetchinf data ", error);
      toast.error("Failed to create post!", {id: toastId});
    }
  }
  return (
    <form onSubmit={submitPost} className="my-8 p-8">
      <div className="flex flex-col my-4">
        <textarea 
          className="text-lg p-4 rounded-lg my-2 placeholder-gray-500 bg-inherit border border-gray-400 focus:outline-none"
          value={title} 
          onChange={handleTitleChange} 
          name="title"
          placeholder="What are you thinking today?"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className={`font-bold text-sm ${
          title.length > 300 ?"text-red-600":"text-gray-200"
        }`}>{title.length}/300</span>
        <button
          className="text-sm bg-blue-500 text-white py-2 px-4 rounded-xl disabled:opacity-25"
          disabled={disabled}
          type="submit"
        >
          Create Now
        </button>
      </div>
    </form>
  )
}

export default AddPost
