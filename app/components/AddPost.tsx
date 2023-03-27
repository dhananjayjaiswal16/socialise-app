'use client'

import { useState } from "react"

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [disabled, setDisabled] = useState(false);
  return (
    <form className="my-8 p-8">
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
        >
          Create Now
        </button>
      </div>
    </form>
  )
}

export default AddPost
