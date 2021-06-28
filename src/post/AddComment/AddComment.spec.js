import thunk from 'redux-thunk';
import { renderWithState } from '../../libs/TestUtils/renderWithState';
import { AddCommentToPost , AddCommentToPostSuccess } from "../actions";
import AddComment from './AddComment';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostService from '../../libs/Services/PostService';
import flushPromises from 'flush-promises';
import createMockStore from '../../libs/TestUtils/createMockStore';




describe('AddComment',() => {

    it(`it dispatches action on click`,async ()=>{
    
        const initialState = {
            auth:{
                user:{
                    username:'testUser'
                }
            }
        };

        jest.spyOn(PostService,'addCommentToPost').mockImplementation(() => {
            return new Promise((resolve,reject)=>{
                resolve({ succeeded: true , post: {} });
            })
            
        });

        const middlewares = [thunk];
        const store = createMockStore(initialState,middlewares);

        const commentText = 'new comment text!';

        renderWithState(<AddComment postId={1}/>,{},store);
        userEvent.type(screen.getByRole('textbox'),commentText);
        const button = screen.getByRole('button');
        userEvent.click(button);
        
        await flushPromises();

        const actions = store.getActions();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(actions[0]).toEqual(AddCommentToPostSuccess({}))
        // expect(store.dispatch).toHaveBeenCalledWith(AddCommentToPost(1,commentText));
    });

});
