import thunk from 'redux-thunk';
import { renderWithState } from '../../libs/TestUtils/renderWithState';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import createMockStore from '../../libs/TestUtils/createMockStore';
import flushPromises from 'flush-promises';
import { posts } from '../../libs/Mocks/posts';
import PostService from '../../libs/Services/PostService';
import PostActionsContainer from './PostActionsContainer';
import { LikePostSuccess, UnlikePostSuccess } from '../actions';

describe('PostActionsContainer',() => {
    it('when post is liked it dispatches unlike action',async () => {
        const initialState = {
            auth:{
                user:{
                    username:'testUser'
                }
            },
            posts:{
                data:[...posts]
            }
        }

        const unlikedPost = initialState.posts.data.find(p => p.postId === 1);
        unlikedPost.isLikedByUser = true;

        jest.spyOn(PostService,'unlikePost').mockImplementation(() => {
            return new Promise((resolve) => {
              resolve({
                succeeded: true,
                data: unlikedPost
              });
            });
        });

        const middlewares = [thunk];
        const store = createMockStore(initialState,middlewares);

        renderWithState(<PostActionsContainer postId={1}/>,{},store);
        const button = screen.getByTestId('likeButton');
        userEvent.click(button);

        await flushPromises();

        const actions = store.getActions();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(actions[1]).toEqual(UnlikePostSuccess(unlikedPost));

    });

    it('when post is not liked it dispatches like action',async () => {
        
        const initialState = {
            auth:{
                user:{
                    username:'testUser'
                }
            },
            posts:{
                data:[...posts]
            }
        }

        const likedPost = initialState.posts.data.find(p => p.postId === 1);
        likedPost.isLikedByUser = false;
        likedPost.likesCount++;

        jest.spyOn(PostService,'likePost').mockImplementation(() => {
            return new Promise((resolve) => {
              resolve({ succeeded: true , data: likedPost });
            });
        });

        const middlewares = [thunk];
        const store = createMockStore(initialState,middlewares);

        renderWithState(<PostActionsContainer postId={1}/>,{},store);
        const button = screen.getByTestId('likeButton');
        userEvent.click(button);

        await flushPromises();

        const actions = store.getActions();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(actions[1]).toEqual(LikePostSuccess(likedPost));
    });
});