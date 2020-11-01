import React from 'react';
// import {Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import './Maps.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

function Maps() {
	const classes = useStyles();
	var dateNow = new Date();
	var currentDate = '';

	if (dateNow.getDate() < 10) {
		currentDate = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-0' + dateNow.getDate();
	} else {
		currentDate = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();
	}
	console.log(currentDate);
	return (
		<div className="map">
			<div className="map__datePicker">
				<form className={classes.container} noValidate>
					<TextField
						id="date"
						label="Select date"
						type="date"
						defaultValue={currentDate}
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</form>
			</div>

			<div className="map__mainMap">
				<img
					src="https://www.worldometers.info/img/maps/sri_lanka_physical_map.gif"
					alt=""
					width="200px"
					height="300px"
				/>
			</div>

			{/* <div className="map__datePicker"></div>

			<div className="map__body">
				<LeafletMap center={[45.4, -75.7]} zoom={12}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
				</LeafletMap>
			</div> */}
		</div>
	);
}

export default Maps;
