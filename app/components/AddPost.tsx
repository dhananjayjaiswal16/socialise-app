'use client'

import React, { useState, FormEvent } from "react"
import axios from "axios";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    const res = await axios.post("/api/posts/createPost", { title })
    console.log("res ==> ", res.data);
    
  }
  return (
    <form onSubmit={submitPost} className="my-8 p-8">
      <div className="flex flex-col my-4">
        <textarea 
          className="text-lg p-4 rounded-lg my-2 placeholder-gray-500 bg-inherit border border-gray-400 focus:outline-none"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          name="title"
          placeholder="What are you thinking today?"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className={`font-bold text-sm ${
          title.length > 300 ?"text-red-600":"text-gray-200"
        }`}>{title.length}/300</p>
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
