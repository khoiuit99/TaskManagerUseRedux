import React, {Component} from 'react';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
import * as actions from './Demo-Redux/Actions/Actions';
import {connect} from 'react-redux';

class App extends Component{

    
    constructor(props){
        super(props);
        this.state={}
    }

    rdstring(){
        var randomstring = require("randomstring");
        return randomstring.generate();
    }

    onToggleForm = () => {
        
        var {itemEditting} = this.props; 

        if(itemEditting && itemEditting.id !== ''){
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onDeleteData(itemEditting);
    }


    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        });
    }

    render(){

        var {displayform} = this.props;

        var elmForm = displayform ? <TaskForm 
                                        onSubmit = {this.onSubmit}
                                    /> : '';

    return(
        <div className="container">   
            ​<h1 className="text-center">Quản lý công việc </h1>
                <div className="row">
                    <div className={ displayform ? 'col-md-4' : '' }>
                        {elmForm}
                    </div>
                    <div className={ displayform ? 'col-md-8' : 'col-md-12' }>
                        <div>
                            <button type="button" className="btn btn-primary" onClick = {this.onToggleForm}>
                                Thêm Công Việc <span className="fas fa-plus"></span>
                            </button>                   
                        </div>
                        <br/>
                        <div>   
                            <Control/>
                        </div>
                        <br/>
                        <div>
                            <TaskList />
                        </div>
                    </div>
                </div>
        </div>
    );
}
}

const mapStatetoProps = state => {
    return {
        displayform : state.displayform,
        itemEditting : state.settingstask
    }
};

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleform());
        },
        onOpenForm : () => {
            dispatch(actions.openform());
        },
        onDeleteTask : (id) => {
            dispatch(actions.deletetask(id));
        },
        onDeleteData : (task) => {
            dispatch(actions.deletedatatask(task));
        }
    }
};

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
