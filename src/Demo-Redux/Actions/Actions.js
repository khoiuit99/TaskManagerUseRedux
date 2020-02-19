import * as types from './../Constants/Conts';

export const tasks = () => {
    return {
        type : types.LIST_ALL
    }
}

export const addtask = (task) => {
	return {
		type : types.ADD_TASK,
		task
	}
}

export const toggleform = () => {
	return {
		type : types.TOGGLE_FORM
	}
}

export const openform = () => {
	return {
		type : types.OPEN_FORM
	}
}

export const closeform = () => {
	return {
		type : types.CLOSE_FORM
	}
}

export const updatetask = (task) => {
	return {
		type : types.UPDATE_TASK,
		task
	}
}

export const deletedatatask = (task) => {
	return {
		type : types.DELETE_DATA_TASK,
		task
	}
}

export const updatestatus = (id) => {
	return {
		type : types.UPDATE_STATUS,
		id
	}
}

export const deletetask = (id) => {
	return {
		type : types.DELETE_TASK,
		id
	}
}

export const filterr = (filter) => {
	return {
		type : types.FILTER_FIND,
		filter
	}
}

export const search = (keyword) => {
	return {
		type : types.SEARCH_TASK,
		keyword
	}
}

export const sorttask = (sort) => {
	return {
		type : types.SORT_TASK,
		sort
	}
}