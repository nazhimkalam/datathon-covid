import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './App.css';
import HeaderCard from './components/headerCards/HeaderCard';
import NavBar from './components/navBar/NavBar';
import Maps from './components/Maps/Maps';

function App() {
	const barState = {
		labels: ['Discharged', 'Hospitalized', 'Deceased'],
		datasets: [
			{
				label: 'No of People',
				backgroundColor: '#ff3f3f',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [65, 42, 9],
			},
		],
	};

	const lineState = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
		],
		datasets: [
			{
				label: 'No of Cases',
				backgroundColor: '#d30000',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [65, 59, 80, 81, 56, 80, 20, 60, 71, 10, 36],
			},
		],
	};

	return (
		<div className="app">
			<NavBar />
			<div className="app__cards">
				<HeaderCard title="Cases" cases={45} total={200} />
				<HeaderCard title="Recovery" cases={14} total={500} />
				<HeaderCard title="Deaths" cases={54} total={807} />
			</div>

			<Maps />

			<div className="app__charts">
				<div className="app__chartsBar">
					<Bar
						data={barState}
						options={{
							title: {
								display: true,
								text: 'Overall Status',
								fontSize: 20,
							},
							legend: {
								display: true,
								position: 'top',
							},
						}}
					/>
				</div>

				<div className="app__chartsLine">
					<Line
						data={lineState}
						options={{
							title: {
								display: true,
								text: 'Number of Cases',
								fontSize: 20,
							},
							legend: {
								display: true,
								position: 'top',
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
