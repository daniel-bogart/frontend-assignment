import axios from 'axios';

export default async function getLatest() {
  const response = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`);
    const myLatest = await response;
    console.log("fleeby", response)
    return myLatest.data.results;
};


export const searchMovies = (term=null) => { // maybe change to function for async
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`)
    .then((response) => {
      console.log(response);
      const results = response.data.results;
      return results;
    });
};

