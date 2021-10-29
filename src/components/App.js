import logo from '../images/logo.svg';
import React, { useEffect, useState } from 'react';
import getLatest from '../utils/movies';
import MovieIndex from './movies/movie_index.jsx';
import './app.css';

const App = () => {
	const [latest, setLatest] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	const showMovies = latest;

	useEffect(() => {
		getLatest().then((res) => {
			setLatest(res);
		})
	}, []);

	return (
		<div className="app">
			<div className="inner-app">
			<MovieIndex showMovies={showMovies}/>
			</div>
		</div>
	);
};

export default App;
