import * as types from './../Constants/Conts';

var initializeState = false;

var Myreducer = (state = initializeState, action) => {
    switch (action.type) {
    	case types.TOGGLE_FORM:
    		state = !state;
    		return state;
    	case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
    	default: return state

    }
}

export default Myreducer;
