import axios from 'axios';

const APIkey = '?api_key=d0d2393ff57617bcd19c89c64bc8a08d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = page =>
  axios.get(`
  ${BASE_URL}/trending/movie/day${APIkey}&page=${page}`);

export const fetchFilmsDetails = id =>
  axios.get(`
  ${BASE_URL}/movie/${id}${APIkey}&append_to_response=credits,reviews`);

export const fetchTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day${APIkey}`);

export const fetchMoviesFromQuery = query =>
  axios.get(`${BASE_URL}/search/movie${APIkey}&query=${query}`);
