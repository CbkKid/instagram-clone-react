import { render ,  screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CommentsList from './CommentsList';
import CommentModel from '../../libs/Models/CommentModel';


const commentsMock = [
    CommentModel(1,'john','hi'),
    CommentModel(2,'johny','hi there!'),
    CommentModel(3,'johnyz','hi again')
];

it(`when there's 3 or more comments a button to view all is visible`,() => {
    
    const comments = [...commentsMock];
    render(<CommentsList comments={comments} />);
    expect(screen.getByText(`View all ${comments.length} comments`)).toBeInTheDocument();

});

it(`if a user expanded all comments a button to show less comments will be shown`,() => {

    const comments = [...commentsMock];
    render(<CommentsList comments={comments} />);
    const showOrHideButton = screen.getByText(`View all ${comments.length} comments`);
    userEvent.click(showOrHideButton);
    expect(screen.getByText(`Show less comments`)).toBeInTheDocument();

});

it(`when more there's less than 3 comments a button to view all is invisible`,() => {

    const comments = commentsMock.slice(2);
    render(<CommentsList comments={comments} />);
    expect(screen.queryByText(`Show less comments`)).toBeNull();

});

it(`when show less comments is click it shows only 2 comments`,() => {

    const comments = [...commentsMock];
    render(<CommentsList comments={comments} />);
    const allComments = screen.getAllByTestId('plain-comment');
    expect(allComments[0]).toBeVisible();
    expect(allComments[1]).toBeVisible();
    expect(allComments[2]).toHaveClass("comment comment--hidden");

});

it(`when view all is clicked it show all of the comments`,() => {

    const comments = [...commentsMock];
    render(<CommentsList comments={comments} />);

    const allComments = screen.getAllByTestId('plain-comment');

    expect(allComments[0]).toHaveClass("comment comment--visible");
    expect(allComments[1]).toHaveClass("comment comment--visible");
    expect(allComments[2]).toHaveClass("comment comment--hidden");

    const showOrHideButton = screen.getByText(`View all ${comments.length} comments`);
    userEvent.click(showOrHideButton);

    expect(allComments[0]).toHaveClass("comment comment--visible");
    expect(allComments[1]).toHaveClass("comment comment--visible");
    expect(allComments[2]).toHaveClass("comment comment--visible");

});

it(`when isDetailed is set to false it shows plain comments`,() => {

    const comments = [...commentsMock];
    render(<CommentsList comments={comments} isDetailed={false} />);
    expect(screen.getAllByTestId('plain-comment')).toHaveLength(comments.length);

});

it(`when isDetailed is true is it shows detailed comments`,() => {

    const comments = [...commentsMock];
    render(<CommentsList comments={comments} isDetailed={true} />);
    expect(screen.getAllByTestId('detailed-comment')).toHaveLength(comments.length);

});