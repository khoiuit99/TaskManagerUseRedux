import * as types from './../Constants/Conts';

var initializeState = '';

var Myreducer = (state = initializeState, action) => {
    switch (action.type) {
    	case types.SEARCH_TASK:
    		return action.keyword;
    	default: return state
    }
}

export default Myreducer;
