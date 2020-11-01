import React from 'react';
import './App.css';
import HeaderCard from './components/headerCards/HeaderCard';
import NavBar from './components/navBar/NavBar';
import Maps from './components/Maps/Maps';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';
import ImageUploader from './components/ImageUploader/ImageUploader';

function App() {
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
					<BarChart />
				</div>

				<div className="app__chartsLine">
					<LineChart />
				</div>
			</div>
			{/* detector */}
			<div className="app__covDetector" id="detection">
				<div className="app__covDetectorHead">
					<h1>COVID-19 DETECTOR</h1>
					<p>
						To use this, you have to upload an image of a human chest xray and then click on detect to get the result.
					</p>
				</div>

				<div className="app__covDetectorImgUpload">
					<ImageUploader />
				</div>
			</div>
		</div>
	);
}

export default App;
