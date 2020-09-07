import React, { useState, useEffect } from 'react';
import { searchMovies } from '../../servise/movies-API';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './MoviesPage.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';
import querystring from 'query-string';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const history = useHistory();

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchMovies(query).then((movies) => setMoviesList(movies));
    history.push({ ...location, search: `?movie_name=${query}` });
  };

  useEffect(() => {
    if (!location.search) {
      return;
    }
    const movieName = querystring.parse(location.search).movie_name;
    searchMovies(movieName).then((movies) => setMoviesList(movies));
  }, [location.search]);

  return (
    <>
      <form className={styles['search-form']} onSubmit={submitHandler}>
        <input
          className={styles['search-input']}
          placeholder='Search moview'
          type='text'
          autoFocus
          onChange={inputChange}
          value={query}
          name='searchQuery'
        />
        <button type='submit' name='submit' className={styles['search-submit']}>
          Search
        </button>
      </form>

      <MoviesList moviesList={moviesList} />
    </>
  );
};

export default MoviesPage;
