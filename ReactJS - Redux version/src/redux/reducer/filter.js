import * as types from '../constant/actionTypes';

let initialState = '';

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER:
            return action.keyword;
        default: return state;
    }
};

export default reducer;