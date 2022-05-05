import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './MoviesPage.module.css';

import { searchMovies } from 'services/API/SearchMovies';
import Searchbar from 'components/Searchbar/Searchbar';

export default function MoviesPage() {
  const [moviesQuery, setMoviesQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!moviesQuery) {
      return;
    }

    async function getMovies() {
      try {
        const movs = await searchMovies(moviesQuery);
        setMovies([...movs]);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [moviesQuery]);

  const onFormSubmit = value => {
    setMoviesQuery(value);
  };
  return (
    <div className={css.moviespage__wrapper}>
      <Searchbar onSearch={onFormSubmit} />
      {movies.length !== 0 && (
        <ul className={css.moviespage__list}>
          {movies &&
            movies.map(movie => {
              const { id, title } = movie;
              return (
                <li key={id} className={css.moviespage__item}>
                  <NavLink to={`${id}`} className={css.moviespage__link}>
                    {title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
