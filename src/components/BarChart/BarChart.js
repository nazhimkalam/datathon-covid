import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css'

function BarChart() {
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
	return (
		<div>
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
	);
}

export default BarChart;
