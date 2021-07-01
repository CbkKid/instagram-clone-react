import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCommentToPost } from "../actions";
import "./AddComment.css";

export default function AddComment({ postId }) {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const addComment = (postId, comment) => {
    dispatch(AddCommentToPost({postId: postId, commentText:comment}));
  };

  return (
    <div className="addComment">
      <textarea
        value={commentText}
        className="addComment__input"
        placeholder="Add a comment..."
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        className="addComment__btn"
        onClick={() => {
          addComment(postId, commentText);
          setCommentText("");
        }}
      >
        Post
      </button>
    </div>
  );
}
