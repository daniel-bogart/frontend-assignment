import axios from 'axios';

export default async function searchMovies(searchTerm=null) {
  const term = searchTerm ? searchTerm.split(' ').join('+') : null;
  const response = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`)
      console.log(response);
      const searchResults = await response;
      return searchResults.data.results;
};