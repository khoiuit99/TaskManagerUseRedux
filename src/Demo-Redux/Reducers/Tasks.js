import * as types from './../Constants/Conts';
var data = JSON.parse(localStorage.getItem('tasks'));
var initializeState = data ? data : [];

var rdstring = () =>{
        var randomstring = require("randomstring");
        return randomstring.generate();
    }
var findIndex = (tasks, id) => {
        var result = -1
        tasks.forEach((task, index) => {
            if(task.id === id){
                result = index
            }
        });
            return result;
        }

var Myreducer = (state = initializeState, action) => {
    switch(action.type){
    	case types.LIST_ALL:
    		return state;
    	case types.ADD_TASK:
    		var preTask = {
    			id : action.task.id,
    			name : action.task.name,
    			status : action.task.status
    		}
            if(!preTask.id){
                preTask.id = rdstring();
                state.push(preTask);
            }else{
                var index = findIndex(state, preTask.id);
                state[index] = preTask;
            }
            localStorage.setItem('tasks', JSON.stringify(state));		
    		return [...state];
        case types.DELETE_TASK:
            var index = findIndex(state,action.id);
            if(index !== -1){
                state.splice(index,1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.UPDATE_STATUS:
            var index = findIndex(state,action.id);
            if(index !== -1){
                state[index].status = !state[index].status;
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state];
    	default: return state;
    }
}

export default Myreducer;