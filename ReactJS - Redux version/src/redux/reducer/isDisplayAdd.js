import * as types from '../constant/actionTypes';

let initialState = true;

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DISPLAY_ADD:
            return !state;
        default: return state;
    }
};

export default reducer;