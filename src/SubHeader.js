import React, { Component } from 'react';

const SubHeader = function(props) {
	const subHeaderStyle={display:"flex", backgroundColor:"#d3d3d3", padding:".5em"};
	const subHeaderLeftComponentStyle={flex:3, textAlign:"left"};
	const subHeaderRightComponentStyle={flex:1, textAlign:"right"};
	return (
		<div style={subHeaderStyle}>
			<div style={subHeaderLeftComponentStyle}>{props.leftComponent}</div>
			<div style={subHeaderRightComponentStyle}>{props.rightComponent}</div>
		</div>
	)
}

export default SubHeader;