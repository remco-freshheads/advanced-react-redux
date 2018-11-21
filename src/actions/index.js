import { COMMENT_SAVE } from './types';

export function saveComment(comment) {
    return {
        type: COMMENT_SAVE,
        payload: comment
    };
}
