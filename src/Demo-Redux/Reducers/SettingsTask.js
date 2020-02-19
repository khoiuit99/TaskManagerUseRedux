import * as types from './../Constants/Conts';

var initializeState = {
    id : '',
    name : '',
    status : true
};

var Myreducer = (state = initializeState, action) => {
    switch (action.type) {
    	case types.UPDATE_TASK:
            return action.task;
        case types.DELETE_DATA_TASK:
        	return {
                id : '',
                name : '',
                status : true
            };
    	default: return state

    }
}

export default Myreducer;
