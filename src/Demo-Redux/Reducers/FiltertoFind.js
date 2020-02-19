import * as types from './../Constants/Conts';

var initializeState = {
    name : '',
    status : -1
};

var Myreducer = (state = initializeState, action) => {
    switch (action.type) {
    	case types.FILTER_FIND:
    		return {
                name : action.filter.name,
                status : parseInt(action.filter.status,10)
            };
    	default: return state
    }
}

export default Myreducer;
