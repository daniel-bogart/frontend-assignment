import axios from 'axios';

export default async function getLatest() {
  const response = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`);
    const myLatest = await response;
    console.log(response);
    return myLatest.data.results;
};

