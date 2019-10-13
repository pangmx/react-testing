import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';

// state will contain array of comments string, default state to be an empty array
export default (state =[], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload, {}];
        case FETCH_COMMENTS:
            debugger;
            const data = action.payload.data.map(comment => comment.name);
            return [...state, ...data];
        default: 
            return state;
    }
};