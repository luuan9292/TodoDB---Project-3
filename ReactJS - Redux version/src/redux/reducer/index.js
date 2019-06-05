import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayAdd from './isDisplayAdd';
import filter from './filter';
import sort from './sort';

let reducer = combineReducers({
    tasks,
    isDisplayAdd,
    filter,
    sort
});

export default reducer;