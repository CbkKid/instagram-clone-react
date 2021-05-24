import React, { useState } from "react";
import { Comment } from "./Comment";
import "./CommentsList.css";

export default function CommentsList({ comments, style, isDetailed }) {
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(2);

  return (
    <div>
      {comments.length > 1 ? (
        <button
          className="CommentsList__btn"
          onClick={() => {
            if (visibleCommentsCount < comments.length)
              setVisibleCommentsCount(comments.length);
            else if (visibleCommentsCount === comments.length)
              setVisibleCommentsCount(2);
          }}
        >
          {comments.length === visibleCommentsCount
            ? "Show less comments"
            : `View all ${comments.length} comments`}
        </button>
      ) : null}
      <div className="Comments" style={{ ...style }}>
        {comments.map((comment, i) => (
          <Comment
            key={comment.id}
            username={comment.user.username}
            userImg={comment.user.avatar}
            comment={comment.text}
            isVisible={i < visibleCommentsCount ? true : false}
            isDetailed={isDetailed}
          />
        ))}
      </div>
    </div>
  );
}
