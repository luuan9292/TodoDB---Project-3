import * as types from '../constant/actionTypes';

let initialState = '';

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SORT:
            return action.sortType;
        default: return state;
    }
};

export default reducer;