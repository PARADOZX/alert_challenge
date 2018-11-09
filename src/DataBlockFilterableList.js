import React, { Component } from 'react';
import DataBlockListItem from './DataBlockListItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataBlockFilterableList = function(props) {
	let listItems = Object.keys(props.listItems).map((item, i) =>
		<DataBlockListItem key={i}
			leftComponent={[<span onClick={()=>props.handleFilter(props.property, item)} data-filter={item}>{item}</span>]}
			rightComponent={[<span onClick={()=>props.handleFilter(props.property, item)} data-filter={item}>{props.listItems[item].length}</span>]}
		/>)
	return (		
		<ul className="list-group">
			{listItems}
		</ul>
	)
}

export default DataBlockFilterableList;