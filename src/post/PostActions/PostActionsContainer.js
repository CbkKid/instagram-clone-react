import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostActions from './PostActions';
import { LikePost, UnlikePost } from '../actions';

export default function PostActionsContainer({postId}){

    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.data.find(post => post.postId == postId));
    const {username} = useSelector(state => state.auth.user);

    const onLikeClick = (isLikedByUser) => {
        if(!isLikedByUser)
            dispatch(LikePost(post.postId,username));
        else
            dispatch(UnlikePost(post.postId,username));
    }

    return(
        <PostActions isLikedByUser={post.isLikedByUser} onLikeClick={()=>onLikeClick(post.isLikedByUser)}/>
    );
}