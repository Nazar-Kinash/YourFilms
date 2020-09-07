import React, { useEffect, useState } from 'react';
import {
  getMovieCredits,
  imageBaseUrl,
  fotoURL,
} from '../../servise/movies-API';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const [castList, setCastList] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then((cast) => setCastList([...cast]));
  }, [movieId]);

  return (
    <>
      <ul className={styles['cast-list']}>
        {!!castList.length ? (
          castList.map(({ id, profile_path, name, character }) => (
            <li className={styles['cast-item']} key={id}>
              <img
                src={profile_path ? `${imageBaseUrl}${profile_path}` : fotoURL}
                alt={name}
              />
              <h4>{name}</h4>
              <p>{character}</p>
            </li>
          ))
        ) : (
          <p>No infirnation.</p>
        )}
      </ul>
    </>
  );
};

export default Cast;
