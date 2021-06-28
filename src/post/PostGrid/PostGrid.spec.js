import { render , screen } from "@testing-library/react";
import PostGrid from "./PostGrid";
import { posts } from '../../libs/Mocks/posts';
import WithRouter from "../../libs/HOC/WithRouter";

describe("PostGrid", () => {
    it("it render a grid of posts", () => {
        const PostGridWithRouter = WithRouter(PostGrid);
        render(<PostGridWithRouter posts={posts}/>);
        const items = screen.getAllByTestId('post-grid-item');
        expect(items).toHaveLength(posts.length);
    });
});