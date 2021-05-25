import React from "react";
import { CommentsList } from "../../post/CommentsList";
import { LikesCounter } from "../../post/LikesCounter";
import { PostActionsContainer } from "../../post/PostActions";
import { PostDescription } from "../../post/PostDescription";
import { PostHeader } from "../../post/PostHeader";
import { Modal } from "../../libs/components/Modal";
import { useHistory } from "react-router-dom";
import Profile from "../../user/Profile/Profile";
import { AddComment } from "../../post/AddComment";
import Skeleton from "@material-ui/lab/Skeleton";
import "./PostDesktop.css";

const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

const PostSkeleton = () => {
  return (
    <div className="post__container">
      <div className="post__header">
        <div
          style={{
            display: "flex",
            paddingLeft: "16px",
            alignItems: "center",
            height: 67
          }}
        >
          <Skeleton
            variant="circle"
            height={32}
            width={32}
            style={{ marginBottom: "6px" }}
          />
          <Skeleton
            variant="rect"
            height={10}
            width={120}
            style={{
              marginLeft: "5px",
              marginBottom: "6px",
              borderRadius: "3px"
            }}
          />
        </div>
      </div>
      <div className="post__body" />
      <div
        className="post__footer"
        style={{ display: "flex", alignItems: "center", height: "80px" }}
      >
        <div>
          <Skeleton
            variant="rect"
            height={10}
            width={80}
            style={{
              marginBottom: "6px",
              marginTop: "6px",
              borderRadius: "3px"
            }}
          />
          <Skeleton
            variant="rect"
            height={10}
            width={120}
            style={{ marginBottom: "6px", borderRadius: "3px" }}
          />
          <Skeleton
            variant="rect"
            height={10}
            width={80}
            style={{ marginBottom: "6px", borderRadius: "3px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default function PostDesktop({ post, user, isLoading }) {
  const history = useHistory();
  console.log(`isLoading:${isLoading}`);
  return (
    <div>
      <Profile user={user} />
      <Modal
        isOpen={true}
        onCloseClick={() => {
          history.push(`/${post.user.username}`);
        }}
      >
        <ModalBody>
          <div className="postContainer">
            <div
              className={
                isLoading
                  ? "postContainer__left"
                  : "postContainer__left--loaded"
              }
            >
              <div className="post__img">
                {isLoading ? (
                  <div>
                    <Skeleton animation="wave" height={250} variant="rect" />
                  </div>
                ) : (
                  <img src={post && post.img} alt="" />
                )}
              </div>
            </div>
            <div className="postContainer__right">
              {isLoading ? (
                <PostSkeleton />
              ) : (
                post && (
                  <div className="post__container">
                    <div className="post__header">
                      <PostHeader
                        username={post.user.username}
                        imgUrl={post.user.avatar}
                      />
                    </div>
                    <div className="post__body">
                      <div className="post__description">
                        <PostDescription
                          username={post.user.username}
                          description={post.description}
                        />
                      </div>
                      <div className="post__comments">
                        <CommentsList
                          isDetailed={true}
                          comments={post.comments}
                          style={{ maxHeight: "190px" }}
                        />
                      </div>
                    </div>
                    <div className="post__footer">
                      <PostActionsContainer postId={post.postId} />
                      <div className="post__likes">
                        <LikesCounter likesCount={post.likesCount} />
                      </div>
                      <time className="post__time">1 DAY AGO</time>
                      <AddComment postId={post.postId} />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
