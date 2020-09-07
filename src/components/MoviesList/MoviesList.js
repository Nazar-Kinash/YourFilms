import React from 'react';
import styles from './MoviesList.module.css';
import MoviesListItem from '../MoivesListItem.js/MoviesListItem';
import PropTypes from 'prop-types';

const MoviesList = ({ moviesList }) => {
  return (
    <>
      <ul className={styles['movies-list']}>
        {moviesList &&
          moviesList.map((movie) => (
            <MoviesListItem {...movie} key={movie.id} />
          ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.array,
};

export default MoviesList;
