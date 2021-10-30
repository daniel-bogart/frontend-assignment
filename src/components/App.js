import Navbar from '../components/navbar/navbar.jsx';
import React, { useEffect, useState } from 'react';
import getLatest from '../utils/getLatest';
import searchMovies from '../utils/searchMovies';
import MovieIndex from './movies/movie_index.jsx';
import './app.css';

const App = () => {
	const [latest, setLatest] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);
	const indexHeader = searchTerm.length > 0 ? `Explore titles related to ${searchTerm}` : 'Most Recent Movies';

	const showMovies = latest;
	console.log(latest);

	useEffect(() => {
		getLatest().then((res) => {
			setLatest(res);
		})
	}, []);

	return (
		<div className="app">
			<Navbar/>
			<div className="inner-app">
			<MovieIndex indexHeader={indexHeader} showMovies={showMovies}/>
			</div>
		</div>
	);
};

export default App;
