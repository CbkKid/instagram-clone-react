import React from "react";
import { Link } from "react-router-dom";
import Square from "../../libs/Layouts/Sqaure";
import "./PostGrid.css";

export default function PostGrid({ posts }) {
  return (
    <div>
      <div className="postsContainer">
        <div className="posts__header">
          <svg height="12" viewBox="0 0 48 48" width="12">
            <path
              clipRule="evenodd"
              d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
              fillRule="evenodd"
            ></path>
          </svg>{" "}
          Posts{" "}
        </div>
        <div className="posts__grid">
          {posts &&
            posts.map((post) => (
              <Square
                key={post.postId}
                className="posts__item"
              >
                <Link 
                to={`/p/${post.postId}`} 
                data-testid="post-grid-item"
                >
                  <img
                    className="posts__image"
                    src={post.img}
                    alt={post.description}
                  />
                </Link>
              </Square>
            ))}
        </div>
      </div>
    </div>
  );
}
