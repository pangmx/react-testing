import {saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe ('SAVE_COMMENTS', () => {
    it ('tests the action type', () => {
        const action = saveComment();
        expect (action.type).toEqual(SAVE_COMMENT);
    });

    it ('tests the payload', () => {
        const action = saveComment('New Comment');
        expect (action.payload).toEqual('New Comment');
    });
});