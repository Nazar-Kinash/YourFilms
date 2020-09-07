import React, { useState, useEffect } from 'react';
import { getTpendingMovies } from '../../servise/movies-API';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);

  useEffect(() => {
    getTpendingMovies().then((movies) => {
      setTrendingMoviesList(movies);
    });
  }, []);

  return <MoviesList moviesList={trendingMoviesList} />;
};

export default HomePage;
