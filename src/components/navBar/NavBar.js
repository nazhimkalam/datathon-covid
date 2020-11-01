import { Button } from '@material-ui/core';
import React from 'react';
import './NavBar.css';

function NavBar() {
	return (
		<div className="navbar">
				<div className="navbar__logo">
					<img src="logo.jpg" alt="logo" className="navbar__logoImg" />
				</div>

				<div className="navbar__right">
					<Button className="navbar__rightDashboard">DASHBOARD</Button>

					<Button className="navbar__rightPrediction">DETECTION</Button>

					<Button className="navbar__rightUpdate">UPDATE</Button>
				</div>
		</div>
	);
}

export default NavBar;
