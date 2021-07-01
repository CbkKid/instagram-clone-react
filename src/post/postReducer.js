import * as types from "./actionTypes";
import { FetchLatestPosts , FetchPost ,LikePost, UnlikePost , AddCommentToPost} from './actions';
import { createReducer , createEntityAdapter } from '@reduxjs/toolkit';

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

const postAdapter = createEntityAdapter({
  selectId: (post) => post.postId,
})

const initialState = postAdapter.getInitialState({
  isLoading: false,
  error: null,
});

export const postSelectors = postAdapter.getSelectors((state) => state.posts);

export const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AddCommentToPost.fulfilled,(state,action) => {
      postAdapter.upsertOne(state,action.payload.post);
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
      postAdapter.upsertOne(state,action.payload.post);
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
      postAdapter.setAll(state,[...action.payload.posts]);
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
      postAdapter.upsertOne(state,action.payload.post);
    })
    .addCase(UnlikePost.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(UnlikePost.fulfilled,(state,action) => {
      state.isLoading = false;
      state.error = null;
      postAdapter.upsertOne(state,action.payload.post);
    })
});
