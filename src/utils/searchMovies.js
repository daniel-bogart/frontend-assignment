import axios from 'axios';

export default async function searchMovies(term=null) {
  const response = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`)
      console.log(response);
      const searchResults = response.data.results;
      return searchResults.data.results;
};