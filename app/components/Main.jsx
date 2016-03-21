import React from 'react';
//classes row and columns automatically center content
var Main = (props) => {
		return (
			<div>
				<div className="row">
					<div className="columns medium-6 large-4 small-centered">
					<p>Main.jsx rendered</p>
						{props.children}
					</div>
				</div>
			</div>
		);
};

module.exports = Main;