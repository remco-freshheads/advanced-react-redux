import { COMMENT_SAVE } from '../actions/types';

export default (state = [], action) =>  {
    switch (action.type) {
        case COMMENT_SAVE:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
