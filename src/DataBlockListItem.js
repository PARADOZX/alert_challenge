import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataBlockListItem = function(props) {
	const listItemStyle = {display:"flex"}
	const listItemLeftComponentStyle ={flex:1, textAlign:"left", cursor:"pointer"}
	const listItemRightComponentStyle = {flex:1, textAlign:"right", cursor:"pointer"}
	return (		
		<li style={listItemStyle} className="list-group-item">
			<div style={listItemLeftComponentStyle}>{props.leftComponent}</div>
			<div style={listItemRightComponentStyle}>{props.rightComponent}</div>
		</li>
	)
}

export default DataBlockListItem;