import * as types from '../constant/actionTypes';

export const tasks = () => {
    return {
        type : types.TASKS
    }
}

export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task
    }
}

export const isDisplayAdd = () => {
    return {
        type : types.DISPLAY_ADD
    }
}

export const isComplete = (id) => {
    return {
        type : types.COMPLETE,
        id
    }
}

export const isDelete = (id) => {
    return {
        type : types.DELETE,
        id
    }
}

export const isImportant = (id) => {
    return {
        type : types.IMPORTANT,
        id
    }
}

export const filter = (keyword) => {
    return {
        type : types.FILTER,
        keyword
    }
}

export const sort = (sortType) => {
    return {
        type : types.SORT,
        sortType
    }
}