import * as types from './../Constants/Conts';

var initializeState = {
    name : '',
    value : 1
};

var Myreducer = (state = initializeState, action) => {
    switch (action.type) {
    	case types.SORT_TASK:
    		return {
                name : action.sort.name,
                value : parseInt(action.sort.value,10)
            };
    	default: return state
    }
}

export default Myreducer;
