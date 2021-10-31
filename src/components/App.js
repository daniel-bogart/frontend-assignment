import Navbar from '../components/navbar/navbar.jsx';
import React, { useEffect, useState } from 'react';
import getLatest from '../utils/getLatest';
import searchMovies from '../utils/searchMovies';
import MovieIndex from './movies/movie_index.jsx';

const App = () => {
	const [latest, setLatest] = useState([]);
	const [results, setResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);
	const indexHeader = searchTerm.length > 0 ? `Explore titles related to ${searchTerm}` : 'Most Recent Movies';
	const showMovies = searchTerm.length > 0 ? results : latest;


	useEffect(() => {
		if (searchTerm.length > 0) {
			searchMovies(searchTerm).then((res) => {
				setResults(res);
			})
		} else {
			getLatest().then((res) => {
				setLatest(res);
			})
	}
	}, []);

	return (
		<div className="app">
			<Navbar setSearchTerm={setSearchTerm}/>
			<div className="inner-app">
			<MovieIndex indexHeader={indexHeader} showMovies={showMovies}/>
			</div>
		</div>
	);
};

export default App;
