import Navbar from '../components/navbar/navbar.jsx';
import React, { useEffect, useState } from 'react';
import getLatest from '../utils/getLatest';
import searchMovies from '../utils/searchMovies';
import MovieIndex from './movies/movie_index.jsx';

const App = () => {
	const [latest, setLatest] = useState([]); // storing the latest movies
	const [results, setResults] = useState([]); // storing the searched for movies
	const [searchTerm, setSearchTerm] = useState(''); // the result of the input field in search abr
	const indexHeader = searchTerm.length > 0 ? `Explore titles related to ${searchTerm}` : 'Most Recent Movies';
	const showMovies = searchTerm.length > 0 ? results : latest; // shows the results of the search instead of the latest if any are present

	console.log("RESLTS", results);
	useEffect(() => {
		if (searchTerm.length === 0) { // resets the page back to the default of the input field is empty
			setResults([]);
		}
		getLatest().then((response) => { // loads the latest movies by default
			setLatest(response);
		})
	}, []);

	return (
		<div className="app">
			<Navbar setSearchTerm={setSearchTerm} setResults={setResults}/>
			<div className="inner-app">
			<MovieIndex indexHeader={indexHeader} showMovies={showMovies}/>
			</div>
		</div>
	);
};

export default App;
