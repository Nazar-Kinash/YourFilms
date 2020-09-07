import React from 'react';
import styles from './MoviesListItem.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { defaultPoster, imageBaseUrl } from '../../servise/movies-API';

const MoviesListItem = ({ id, poster_path, title }) => {
  const location = useLocation();

  return (
    <>
      <Link
        className={styles.Link}
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
        key={id}>
        <li className={styles.Item}>
          <img
            src={poster_path ? `${imageBaseUrl}${poster_path}` : defaultPoster}
            alt={title}
          />
          {title}
        </li>
      </Link>
    </>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;
