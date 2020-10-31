import React from 'react';
import './App.css';
import HeaderCard from './components/headerCards/HeaderCard';
import NavBar from './components/navBar/NavBar';

function App() {
	return (
		<div className="app">
			<NavBar />
			<div className="app__cards">
				<HeaderCard title="Cases" cases={45} total={200} />
				<HeaderCard title="Recovery" cases={14} total={500} />
				<HeaderCard title="Deaths" cases={54} total={807} />
			</div>
		</div>
	);
}

export default App;
