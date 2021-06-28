import { render , screen } from '@testing-library/react';
import LikesCounter from './likesCounter';

describe('LikesCounter' , () => {
    it(`it dipslays the number of likes`, () => {
        const numOfLikes = 2;
        render(<LikesCounter likesCount={numOfLikes}/>);
        expect(screen.getByText(`${numOfLikes} likes`)).toBeInTheDocument();
    });
    
    it(`when theres only 1 like it appends 'like' instead of 'likes' `, () => {
        const numOfLikes = 1;
        render(<LikesCounter likesCount={numOfLikes}/>);
        expect(screen.getByText(`${numOfLikes} like`)).toBeInTheDocument();
    });
});

