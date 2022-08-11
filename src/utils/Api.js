import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '42d9e788e3438c5863a342fbee36edd9';

export const fetchSearchMovies = (query, page) => {
  axios.defaults.params = {
    api_key: API_KEY,
    query: query,
    page: page,
    language: 'en-US',
    include_adult: false,
  };

  return axios('/search/movie').then(response => response.data.results);
};

// https:/api.themoviedb.org/3/search/movie?api_key=42d9e788e3438c5863a342fbee36edd9&language=en-US&page=1&include_adult=false&query=cats

export const fetchTrendingMovies = () => {
  return axios(`/trending/all/day?api_key=${API_KEY}`).then(
    response => response.data.results
  );
};

export const fetchMovieById = id => {
  return axios(`/movie/${id}?api_key=${API_KEY}`).then(
    response => response.data
  );
};

//   export const fetchGenres = () => {
//     axios.defaults.params = {
//       api_key: this.#API_KEY,
//       language: 'en-US',
//     };

//     return axios(`/genre/movie/list`).then(response => response.data.genres);
//   }
