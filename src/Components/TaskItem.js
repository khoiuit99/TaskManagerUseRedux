import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../Demo-Redux/Actions/Actions';

class TaskItem extends Component{

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdateTask(this.props.task);
        this.props.onOpenForm();
    }

    render(){

        var { task, index } = this.props;

    return (
    	<tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span   className={ task.status === true ? 'badge badge-pill badge-success' : 'badge badge-pill badge-danger'}
                        onClick = {this.onUpdateStatus}
                > 
                    {task.status === true ? 'Ẩn' : 'Kích hoạt'}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-warning btn-sm" onClick={this.onUpdate}>
                    <span className="fas fa-edit"></span> Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger btn-sm" onClick={this.onDelete}>
                    <span className="fas fa-window-close" ></span> Xóa
                </button>
            </td>
        </tr>
    );
}
}
const mapStatetoProps = state => {
    return {
        tasks : state.tasks,
        displayform : state.displayform,
        name : state.filtername
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updatestatus(id));
        },
        onUpdateTask : (task) => {
            dispatch(actions.updatetask(task));
        },
        onOpenForm : () => {
            dispatch(actions.openform());
        },
        onDeleteTask : (id) => {
            dispatch(actions.deletetask(id));
        }

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskItem);
