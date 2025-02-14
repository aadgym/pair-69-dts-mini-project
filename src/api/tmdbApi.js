import axios from 'axios';

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
    },
  });


export default tmdbApi;