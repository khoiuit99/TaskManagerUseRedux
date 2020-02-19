import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../Demo-Redux/Actions/Actions';

class TaskForm extends Component{

	constructor(props){
		super(props);
		this.state={}
	}


    UNSAFE_componentWillMount(){
        if(this.props.itemEditting){
            this.setState({
                id : this.props.itemEditting.id,
                name : this.props.itemEditting.name,
                status : this.props.itemEditting.status
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditting){
            this.setState({
                id : nextProps.itemEditting.id,
                name : nextProps.itemEditting.name,
                status : nextProps.itemEditting.status
            });
        }else if(!nextProps.itemEditting){
            this.setState({
                id:'',
                name : '',
                status : true
            });
        } 
    }

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if(name === 'status'){
			value = target.value === 'true' ? true : false;
		}
		this.setState({
			[name] : value
		})
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onAddTask(this.state);
		this.onClear();
		this.onExitForm();
	}

    onExitForm = () => {
        this.props.onCLoseFormm();
    }

	onClear = () => {
		this.setState({
			name : '',
			status : false
		});
	}
 
    render(){

    var {displayform} = this.props;
    var {id} = this.state; 	
    if(!displayform) return null;
    return (
    	<div>
    		<div className="card">
    		  	<div className="card-body">
    		    	<form onSubmit = {this.onSubmit}>
    	  				<div className="form-row">
    	    				<div className="form-group col-md-12">
    	    					<h5>{ id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
    	    						<span className="fas fa-times-circle text-right" onClick = {this.onExitForm}></span>
    	    					</h5>
    	      					<label>Tên công việc</label>
    	      					<input 	type="text" 
    	      							className="form-control"
    	      							name = "name"
    	      							value = {this.state.name}
    	      							onChange = {this.onChange}/><br/>
    	      					<label>Trạng thái</label>
    	      					<select className="custom-select custom-select-sm"
    	      							name = "status"
    	      							value = {this.state.status}
    	      							onChange = {this.onChange}>
    	      		  				<option defaultValue>Trạng thái</option>
    	      		  				<option value={false}>Kích hoạt</option>
    	      		  				<option value={true}>Ẩn</option>
    	      					</select><hr/>
    	      					<div className="text-center">
	      		 					<button type="submit" className="btn btn-warning btn-sm">
      		 						<span className="fas fa-plus"></span>  Lưu lại
      		 						</button>
      		 						&nbsp;
      		 						<button type="button" className="btn btn-danger btn-sm" onClick={this.onClear}>
      		 						<span className="fas fa-window-close" ></span>  Hủy Bỏ
      		 						</button>
      		 					</div>
    	      				</div>
    	      			</div>
    				</form>
    		  	</div>
    		</div>
    	</div>
    );
}
}
const mapStatetoProps = (state) => {
    return {
        tasks : state.tasks,
        displayform : state.displayform,
        itemEditting : state.settingstask
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onAddTask : (task) => {
            dispatch(actions.addtask(task));
        },
        onCLoseFormm : () => {
            dispatch(actions.closeform());
        }
    }
};
export default connect(mapStatetoProps, mapDispatchtoProps)(TaskForm);
