import React, { Component } from 'react';
import alertsList from './alerts';
import DataBlockDisplay from './DataBlockDisplay';
import Header from './Header';
import SubHeader from './SubHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

class AlertManager extends Component {	
	constructor(props){
		super();
		this.state={
			alerts:alertsList,
			dataPropertiesToDisplay:["Severity","ClientIP","Protocol","ClientCountry"],
			filtersApplied:[],
			filteredIds:[]
		}
	}
	applyFilter(property, value){
		let exists = false;
		//check for duplicate filter
		for(let i in this.state.filtersApplied){
			if(Object.keys(this.state.filtersApplied[i])[0] === property) return;
		}
		let updatedFiltersApplied = [{[property]:value}, ...this.state.filtersApplied];
		this.setState({
			filtersApplied: updatedFiltersApplied
		})
	}
	resetFilters(){
		this.setState({filtersApplied:[]})
	}
	render() {
		let filteredAlerts = this.state.alerts;
		for(let i in this.state.filtersApplied)
		{
			filteredAlerts = filteredAlerts.filter(f => f[Object.keys(this.state.filtersApplied[i])[0]] === Object.values(this.state.filtersApplied[i])[0])
		}
		
		let dataBlocksList = this.state.dataPropertiesToDisplay.map((item, i) => {			
			return <DataBlockDisplay key={i} property={item} alerts={filteredAlerts} handleFilter={this.applyFilter.bind(this)} />
		})

		let filters = this.state.filtersApplied.map((item, i)=>{ return <span style={{margin:"0px 5px", backgroundColor:"#ffffff", padding:"2px"}} key={i}>{Object.keys(item)[0]} = {Object.values(item)[0]}</span>})

		return (
		    <div className="row">
		    	<div className="offset-1 col-10">
			    	<Header>Total Alerts Count {filteredAlerts.length}</Header>
			    	<SubHeader
			    		leftComponent={["Filters ", filters]}
			    		rightComponent={[<span onClick={this.resetFilters.bind(this)}>Reset</span>]}
			    	/>
			    	<div>
			    		{dataBlocksList}
			    	</div>
		    	</div>
		    </div>
	  );
	}
}

export default AlertManager;