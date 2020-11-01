import { Button } from '@material-ui/core';
import React from 'react';
import './NavBar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function NavBar() {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img src="logo.jpg" alt="logo" className="navbar__logoImg" />
				<div>
					<span>COVI </span>
					<span>PRED</span>
				</div>
			</div>

			<div className="navbar__right">
				<Button className="navbar__rightPrediction">
					<Link to="detection" smooth={true} duration={1000}>
						DETECTION
					</Link>
				</Button>
				<Button className="navbar__rightUpdate">UPDATE</Button>
			</div>
		</div>
	);
}

export default NavBar;
