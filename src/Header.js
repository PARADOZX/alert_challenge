import React, { Component } from 'react';

const Header = function(props) {
	const headerStyle={backgroundColor:"#696969", color:"#ffffff", padding:"1em", textAlign:"left"};
	return (
		<div style={headerStyle}>
			{props.children}
		</div>
	)
}

export default Header;