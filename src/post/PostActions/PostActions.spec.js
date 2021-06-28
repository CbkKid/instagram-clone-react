import { render , screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PostActions from './PostActions';

it('calls callback on like button click',() => {
    const callback = jest.fn();
    render(<PostActions onLikeClick={callback}/>);
    const likeButton = screen.getByTestId('likeButton');
    userEvent.click(likeButton);
    expect(callback).toHaveBeenCalledTimes(1);
});