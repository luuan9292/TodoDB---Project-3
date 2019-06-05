import * as types from '../constant/actionTypes';

let autoRandomStringGUID = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

let autoGenerateRandomGUID = () => {
    return autoRandomStringGUID() + autoRandomStringGUID() + '-' + autoRandomStringGUID() + autoRandomStringGUID()
} // Tu dong tao id

let findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
} //Tim vi tri trong mang tasks khi truyen id vao

let initialState = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];

const reducer = (state = initialState, action) => {

    let index = findIndex(state, action.id);

    switch (action.type) {
        case types.TASKS:
            return [...state];
        case types.ADD_TASK:
            if (action.task.name.length > 0) {
                let newTask = {
                    id: autoGenerateRandomGUID(),
                    ...action.task
                };
                state.push(newTask);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.COMPLETE:
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    isComplete: !state[index].isComplete
                }
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE:
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.IMPORTANT:
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    isImportant: !state[index].isImportant
                }
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default reducer;