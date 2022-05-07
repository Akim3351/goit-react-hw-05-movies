import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import FetchReviews from 'services/API/FetchRewiews';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    try {
      async function getReviews(movieId) {
        const revs = await FetchReviews(movieId);
        setReviews([...revs]);
      }
      getReviews(movieId);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (reviews === '') {
    return;
  }

  return (
    <div>
      <ul className={css.review__list}>
        {reviews.map(rev => {
          return (
            <li key={rev.id} className={css.review__item}>
              <p className={css.review__author}>Author: {rev.author}</p>
              <p className={css.review__content}>{rev.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
