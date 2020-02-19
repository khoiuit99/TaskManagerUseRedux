import React, {Component} from 'react';
import * as actions from './../Demo-Redux/Actions/Actions';
import {connect} from 'react-redux';

class Control extends Component{

	constructor(props){
		super(props);
		this.state={
			keyword : '',
		}
	}

	onFind = () => {
		this.props.onSearch(this.state.keyword);
	}


	onSort = (sortBy, sortValue) => {
		var sort = {
			name : sortBy,
			value : sortValue
		}
		this.props.onSortt(sort);
		
	}

	onChange = (event) => {
		this.setState({
			keyword : event.target.value
		});
	}

    render(){

   	var { keyword } = this.state;
   	var {sort, sortBy, sortValue} = this.props;

   	

    return (
    	<div>
    		<div className="btn-toolbar">
			<div className="input-group">
		  		<input 
		  				type="text" 
		  				className="form-control" 
		  				placeholder="Search"
		  				name = "keyword" 
		  				value={keyword}
		  				onChange = {this.onChange}
		  		/>
		  		<div className="input-group-append">
		    		<button 
		    				className="btn btn-primary btn-sm" 
		    				type="button" 
		    				id="button-addon2"
		    				onClick={this.onFind}>
		    			<span className="fas fa-search"></span> Tìm
		    		</button>
		  		</div>
		  	</div>&nbsp;
		  	<div className="dropdown">
		  		<button className="btn btn-primary btn-sm dropdown-toggle" 
		  				type="button" id="dropdownMenuButton" 
		  				data-toggle="dropdown" 
		  				aria-haspopup="true" 
		  				aria-expanded="false">
	  		    	Sắp xếp
		  		</button>
		  			<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton">
				  	<li onClick={ () => this.onSort('name', 1)}>
				  		<span className="fas fa-sort-alpha-down"> </span>&nbsp;
				  		<a role="button">
				  			Từ A - Z
				  		</a>&nbsp;
				  		<span className={(sortBy === 'name' && sortValue === 1) ? 'fas fa-check' : ''}>
				  		</span>
				  	</li>
				  	<li onClick={ () => this.onSort('name', -1)}>
				  		<span className="fas fa-sort-alpha-down-alt"></span>&nbsp;
				  		<a role="button">
				  			 Từ Z - A
				  		</a>&nbsp;
				  		<span className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'fas fa-check' : ''}>
				  		</span>
				  	</li>
				  	<li className="dropdown-divider"></li>
				  	<li onClick={ () => this.onSort('status', 1)}>
				  		<a role="button">
				  			Theo kích hoạt
				  		</a>&nbsp;
				  		<span className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'fas fa-check' : ''}>
				  		</span>
				  	</li>
				  	<li onClick={ () => this.onSort('status', -1)}>
				  		<a role="button">
				  			Theo ẩn
				  		</a>&nbsp;
				  		<span className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'fas fa-check' : ''}>
				  		</span>
				  	</li>
				</ul>
		    </div>
		</div>
	</div>
    );

}
}
const mapStatetoProps = state => {
	return {}
}
const mapDispatchtoProps = (dispatch, props) => {
	return {
		onSearch : (keyword) => {
			dispatch(actions.search(keyword))
		},
		onSortt : (sort) => {
			dispatch(actions.sorttask(sort))
		}
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Control);
