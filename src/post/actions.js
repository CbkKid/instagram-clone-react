import * as types from "./actionTypes";
import PostService from "../libs/Services/PostService";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetPosts = () => ({
  type: types.GET_POSTS
});

export const ADD_POST = (post) => ({
  type: types.ADD_POST,
  payload: post
});

export const AddCommentToPost = createAsyncThunk(
  'post/addComment',
  async(CommentData,{getState,rejectWithValue}) => {
    try{
      const { postId , commentText} = CommentData;
      const user = getState().auth.user;
      const response = await PostService.addCommentToPost(postId, user, commentText);
      return response;
    } catch(err){
      rejectWithValue(err);
    }
  }
)

export const FetchPost = createAsyncThunk(
  'post/fetchPost',
  async(postId,{rejectWithValue}) => {
    try{
      const response = await PostService.getPost(postId);
      return response;
    } catch(err){
      return rejectWithValue(err);
    }
  }
)

export const FetchLatestPosts = createAsyncThunk(
  'post/fetchLatestPosts',
  async (_,{rejectWithValue}) => {
    try{
      const response = await PostService.getLatestPosts();
      return response;
    } catch(err){
      return rejectWithValue(err);
    }
  }
);

export const LikePost = createAsyncThunk(
  'post/likedPost',
  async(postId,{ getState,rejectWithValue }) => {
    try{
      const username = getState().auth.user.username;
      const response =  await PostService.likePost(postId, username);
      return response;
    } catch(err){
      rejectWithValue(err);
    }
  }
 )

export const UnlikePost = createAsyncThunk(
  'post/unlikePost',
  async(postId,{ getState,rejectWithValue }) => {
    try{
      const username = getState().auth.user.username;
      const response =  await PostService.unlikePost(postId, username);
      return response;
    } catch(err){
      rejectWithValue(err);
    }
  }
)
