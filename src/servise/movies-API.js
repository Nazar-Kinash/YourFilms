import axios from 'axios';

const key = 'd06dc4f9b4a82eb9f60b0e2daf04ac54';
const baseUrl = 'https://api.themoviedb.org/3';
export const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
export const defaultPoster =
  'https://img.favpng.com/5/4/5/clapperboard-television-film-animation-dingle-royalty-free-png-favpng-gRatKqJZBVcaWD0iqJ0Ex0jb2.jpg';
export const fotoURL = 'https://pap.ua/media/anonymous_avatar.jpg';

export const getTpendingMovies = async () => {
  return await axios
    .get(`${baseUrl}/trending/movie/week?api_key=${key}`)
    .then((response) => response.data.results);
};

export const searchMovies = async (query) => {
  return await axios
    .get(
      `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then((response) => response.data.results);
};
export const getMovieDetals = async (movie_id) => {
  return await axios
    .get(`${baseUrl}/movie/${movie_id}?api_key=${key}`)
    .then((response) => response.data);
};

export const getMovieCredits = async (movie_id) => {
  return await axios
    .get(`${baseUrl}/movie/${movie_id}/credits?api_key=${key}`)
    .then((response) => response.data.cast);
};

export const getMovieReviews = async (movie_id) => {
  return await axios
    .get(
      `${baseUrl}/movie/${movie_id}/reviews?api_key=${key}&language=en-US&page=1`,
    )
    .then((response) => response.data.results);
};
