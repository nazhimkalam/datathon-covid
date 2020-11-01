import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
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
				backgroundColor: '#000000',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [65, 59, 80, 81, 56, 80, 20, 60, 71, 10, 36],
			},
		],
	};

	return (
		<div>
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
	);
}

export default LineChart;
