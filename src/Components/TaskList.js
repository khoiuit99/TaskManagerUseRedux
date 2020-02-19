import React, {Component} from 'react';
import TaskItem from './TaskItem';
import * as actions from './../Demo-Redux/Actions/Actions';
import {connect} from 'react-redux';

class TaskList extends Component{

    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1
        }
    }
    onChange = (event) => {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        var filter = {
                name : name === 'filterName' ? value : this.state.filterName,
                status : name === 'filterStatus' ? value : this.state.filterStatus
            };
        this.props.onFilter(filter);
        this.setState({
            [name] : value
        });
    }


    render(){

    var { tasks,filterr,keyword,sort } = this.props;

    if(filterr.name){
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(filterr.name.toLowerCase()) !== -1;
        });
    }
    tasks = tasks.filter((task) => {
        if(filterr.status === -1){
            return task;
        }else{
            return task.status === (filterr.status === 1 ? true : false);
        }
    });

    tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    if(sort.name === 'name'){
        tasks = tasks.sort((a,b) => {
            if(a.name > b.name) return sort.value;
            else if(a.name < b.name) return -sort.value;
            return 0;
        })
    }else{
        tasks = tasks.sort((a,b) => {
            if(a.status > b.status) return sort.value;
            else if(a.status < b.status) return -sort.value;
            return 0;
        })
    }

    var ElmTask = tasks.map((task, index) => {
    return <TaskItem    key = {task.id} 
                        index = {index} 
                        task = {task} 
            />
    });
     

    var {filterName, filterStatus} = this.state;
    return (
    	<div>
    		<div>
                <div className="table">
                    <table className="table table-bordered">
                        <caption>List of tasks</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                    <input 
                                        className="form-control form-control-sm" 
                                        type="text" placeholder="Search" 
                                        name="filterName"
                                        value = { filterName }
                                        onChange={ this.onChange }/>
                                </td>
                                <td>
                                    <select 
                                            className="custom-select custom-select-sm" 
                                            name="filterStatus"
                                            value = { filterStatus }
                                            onChange={ this.onChange }>
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Kích hoạt</option>
                                        <option value={1}>Ẩn</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                                {ElmTask}
                        </tbody>
                    </table>
                </div>
            </div>
    	</div>
    );
}
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterr : state.filterr,
        keyword : state.search,
        sort : state.sort
    }
};

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onFilter : (filter) => {
            dispatch(actions.filterr(filter));
        }
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(TaskList);
