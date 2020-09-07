import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../servise/movies-API';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then((reviewsArr) => setReviews([...reviewsArr]));
  }, [movieId]);

  return (
    <>
      <ul className={styles['reviews-list']}>
        {!!reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
