import commentsReducer from '../comments';
import { COMMENT_SAVE } from '../../actions/types';

const comment = 'new comment';

it('handles actions of type COMMENT_SAVE', () => {
    const action = {
        type: COMMENT_SAVE,
        payload: comment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([comment]);
});
