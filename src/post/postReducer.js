import * as types from "./actionTypes";
import { FetchLatestPosts , FetchPost ,LikePost, UnlikePost , AddCommentToPost} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

const AddOrUpdateObjectInArray = (arr,item,id) => {

  return arr.map(i => {
    if(i[id]!==item[id]){
      return i;
    }
    else{
      return item;
    }
  });

}

export const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AddCommentToPost.fulfilled,(state,action) => {
      state.data = AddOrUpdateObjectInArray(state.data,action.payload.post,'postId');
    })
    .addCase(AddCommentToPost.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(FetchPost.pending,(state,action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(FetchPost.fulfilled,(state,action) => {
      state.isLoading = false;
      state.data = AddOrUpdateObjectInArray(state.data,action.payload.post,'postId');
    })
    .addCase(FetchPost.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(FetchLatestPosts.pending,(state,action) => {
      state.isLoading = true;
    })
    .addCase(FetchLatestPosts.fulfilled,(state,action) => {
      state.isLoading = false;
      state.data = [...action.payload.posts]
    })
    .addCase(FetchLatestPosts.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(LikePost.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(LikePost.fulfilled,(state,action) => {
      state.isLoading = false;
      state.error = null;
      state.data = AddOrUpdateObjectInArray(state.data,action.payload.post,'postId');
    })
    .addCase(UnlikePost.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(UnlikePost.fulfilled,(state,action) => {
      state.isLoading = false;
      state.error = null;
      state.data = AddOrUpdateObjectInArray(state.data,action.payload.post,'postId');
    })
});
