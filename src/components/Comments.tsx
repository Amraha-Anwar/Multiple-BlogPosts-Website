"use client";

import { useState } from "react";

const RandomComments = [
  {
    id: 1,
    author: "Harry",
    content: "This is an outstanding post",
    date: "2023-09-01",
  },
  {
    id: 2,
    author: "Ron",
    content: "I really admire your work",
    date: "2024-02-15",
  },
  {
    id: 3,
    author: "Hermione",
    content: "Wow, this is amazing",
    date: "2024-09-23",
  },
];

export default function Comments() {
  const [comments, setComments] = useState(RandomComments);
  const [author, setAuthor] = useState("");
  const [newComment, setNewComment] = useState("");

  const addComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (author.trim() && newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: author,
        content: newComment,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, comment]);
      setAuthor("");
      setNewComment("");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <h2 className="text-2xl font-bold text-custom2 py-4">Comments</h2>
      <form onSubmit={addComment} className="mb-10">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
         className="block w-full mb-5 p-2 border border-gray-300 rounded-[5px]"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="block w-full mb-5 p-2 border border-gray-300 rounded-[5px]"
        ></textarea>
        <button
          type="submit"
          className="bg-custom2 text-white px-4 py-2 rounded-[10px] hover:bg-custom3"
        >
          Post Comment
        </button>
      </form>
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-custom1/20 p-4 mb-5 rounded-[5px]"
          >
            <h3 className="text-black font-bold ">{comment.author}</h3>
            <p className="my-2" >{comment.content}</p>
            <small style={{ color: "#555" }}>{comment.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
