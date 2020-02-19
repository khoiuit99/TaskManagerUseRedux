import tasks from './Tasks';
import displayform from './DisplayForm';
import settingstask from './SettingsTask'
import filterr from './FiltertoFind';
import search from './Search';
import sort from './SortTask';
import {combineReducers} from 'redux';

const Myreducer = combineReducers({
    tasks,
    displayform,
  	settingstask,
  	filterr,
  	search,
  	sort
});

export default Myreducer;