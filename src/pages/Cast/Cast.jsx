import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import FetchCastInfo from 'services/API/FetchCastInfo';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    try {
      async function getCastInfo(movieId) {
        const castList = await FetchCastInfo(movieId);
        setCast([...castList]);
      }
      getCastInfo(movieId);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (cast === '') {
    return;
  }
  return (
    <div>
      <ul className={css.cast__list}>
        {cast.map(item => {
          return (
            <li key={item.credit_id} className={css.cast__item}>
              {item.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                  alt={`${item.character} - ${item.name}`}
                  className={css.cast__photo}
                />
              ) : (
                <p className={css.cast__notphoto}> Photo not found</p>
              )}
              <div className={css.cast__description}>
                <p className={css.cast__character}>{item.character} - </p>
                <br />
                <p className={css.cast__name}>{item.name}</p>
                <br />
                <p className={css.cast__popularity}>
                  (Popularity: {item.popularity})
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
