import { screen } from '@testing-library/react';
import PostList from './PostList';
import { posts as postsMock } from '../../libs/Mocks/posts';
import { renderWithState } from '../../libs/TestUtils/renderWithState';
import createMockStore from '../../libs/TestUtils/createMockStore';
import WithRouter from '../../libs/HOC/WithRouter';

it(`it renders a list of posts`,() => {

    const posts = [...postsMock];
    const store = createMockStore({
        auth:{
            user:{
                username:'testUser'
            }
        },
        posts:{
            data:posts
        }
    });
    const PostsWithRouter = WithRouter(PostList);
    renderWithState(<PostsWithRouter  posts={posts} />,{},store);
    const allPosts = screen.getAllByTestId('post-listitem');
    expect(allPosts).toHaveLength(posts.length);
    
});