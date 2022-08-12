import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '42d9e788e3438c5863a342fbee36edd9';

export const fetchSearchMovies = query => {
  axios.defaults.params = {
    api_key: API_KEY,
    query: query,
    language: 'en-US',
    include_adult: false,
  };

  return axios('/search/movie').then(response => response.data.results);
};

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

export const fetchMovieReviews = id => {
  return axios(`/movie/${id}/reviews?api_key=${API_KEY}`).then(
    response => response.data.results
  );
};

export const fetchMovieCast = id => {
  return axios(`/movie/${id}/credits?api_key=${API_KEY}`).then(
    response => response.data.cast
  );
};
