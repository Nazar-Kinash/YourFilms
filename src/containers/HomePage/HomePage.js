import React, { useState, useEffect } from "react";
import {
  getGenres,
  getTpendingMovies,
  searchMovies,
} from "../../servise/movies-API";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [moviesGenresList, setMoviesGenresList] = useState([]);

  useEffect(() => {
    getTpendingMovies().then((movies) => {
      setTrendingMoviesList(movies);
    });
    getGenres().then((data) =>
      data.forEach(({ name }) =>
        searchMovies(name).then((movies) =>
          setMoviesGenresList([...moviesGenresList, { title: name, movies }])
        )
      )
    );
  }, []);

  console.log(moviesGenresList);
  return (
    <>
      <MoviesSlider moviesList={trendingMoviesList} />
      <MoviesSlider moviesList={trendingMoviesList} />
      <MoviesSlider moviesList={trendingMoviesList} />
    </>
  );
};

export default HomePage;
