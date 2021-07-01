import * as types from "./actionTypes";
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
    .addCase(types.ADD_POST_COMMENT_SUCCESS,(state,action) => {
      state.data = AddOrUpdateObjectInArray(state.data,action.payload.post,'postId');
    })
    .addCase(types.ADD_POST_COMMENT_FAIL,(state,action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(types.FETCH_POST,(state,action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(types.FETCH_POST_SUCCESS,(state,action) => {
      state.isLoading = false;
      state.data = AddOrUpdateObjectInArray(state.data,action.post,'postId');
    })
    .addCase(types.FETCH_POST_FAIL,(state,action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(types.FETCH_LATEST_POSTS,(state,action) => {
      state.isLoading = true;
    })
    .addCase(types.FETCH_LATEST_POSTS_SUCCESS,(state,action) => {
      state.isLoading = false;
      state.data = [...action.posts]
    })
    .addCase(types.FETCH_LATEST_POSTS_FAIL,(state,action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(types.POST_LIKED_BY_USER_FAIL,(state,action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(types.POST_LIKED_BY_USER_SUCCESS,(state,action) => {
      console.log(action.post)
      state.isLoading = false;
      state.error = null;
      state.data = AddOrUpdateObjectInArray(state.data,action.post,'postId');
    })
    .addCase(types.POST_UNLIKED_BY_USER_FAIL,(state,action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(types.POST_UNLIKED_BY_USER_SUCCESS,(state,action) => {
      state.isLoading = false;
      state.error = null;
      state.data = AddOrUpdateObjectInArray(state.data,action.post,'postId');
    })
});
