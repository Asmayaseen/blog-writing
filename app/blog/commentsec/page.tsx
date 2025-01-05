"use client";
import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [username, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    { username: string; comment: string }[]
  >([]);
  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && comment) {
      const newComment = { username, comment };
      setComments([newComment, ...comments]);
      setUserName("");
      setComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Comments</h2>

      {/*Comment Form*/}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          className="w-full  mb-2 px-4 py-2 border border-gray-300 rounded-md "
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md "
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </form>
      {/*Display Conmments*/}

      <div>
        {comments.map((item, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p className="font-semibold">{item.username}</p>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSec;
