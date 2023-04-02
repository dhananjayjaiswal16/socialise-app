"use client"
import { Modal } from "@nextui-org/react"
import { useState } from "react";

const CustomModal = ({id, visible, closeHandler, deletePost} : { id: string, visible: boolean, closeHandler: () => void, deletePost: (postId: string) => Promise<void> }) => {
  return (
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
          <span className="text-md mt-4 mb-2">
            Are you sure you want to delete this comment?
          </span>
        <Modal.Footer>
          <button onClick={closeHandler} className="bg-blue-500 text-sm text-white rounded-lg px-4 py-2">
            Cancel
          </button>
          <button onClick={() => deletePost(id)} className="bg-red-600 text-sm text-white rounded-lg px-4 py-2">
            Delete
          </button>
        </Modal.Footer>
      </Modal>
  )
}

export default CustomModal
