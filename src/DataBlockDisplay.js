import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataBlockFilterableList from './DataBlockFilterableList';

class DataBlockDisplay extends Component {	
	constructor(props){
		super();
	}
	groupAlerts(alerts){
		let hashMap = {};
		for(let i in alerts)
		{
			if(!hashMap[alerts[i][this.props.property]]){	
				hashMap[alerts[i][this.props.property]] = [];
			}
			hashMap[alerts[i][this.props.property]].push(alerts[i].AlertId);
		}
		return hashMap;
	}
	render() {		
		const dataBlockDisplayStyle = {border:"1px solid black", margin: "10px"}
		const dataBlockDisplayListStyle = { listStyleType : "none"}

		const groupedAlerts = this.groupAlerts(this.props.alerts);
		//let items = Object.keys(groupedAlerts).map((item, i) => <li className="card-text" key={i}><span onClick={()=>this.props.handleFilter(this.props.property, item)} data-filter={item}>{item} {groupedAlerts[item].length}</span></li>);
		return (
		    <div className="card" style={dataBlockDisplayStyle}>
		    	<div className="card-body">
			    	<h5 className="card-title">{this.props.property}</h5>
			    	<DataBlockFilterableList 
			    		listItems={groupedAlerts} 
			    		property={this.props.property}
			    		handleFilter={this.props.handleFilter}
			    	/>			    	
		    	</div>
		    </div>
	  );
	}
}

export default DataBlockDisplay;