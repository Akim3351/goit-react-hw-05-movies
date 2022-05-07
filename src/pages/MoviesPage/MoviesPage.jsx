import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './MoviesPage.module.css';

import { searchMovies } from 'services/API/SearchMovies';
import Searchbar from 'components/Searchbar/Searchbar';

export default function MoviesPage() {
  const location = useLocation();
  const [moviesQuery, setMoviesQuery] = useState('');
  const [movies, setMovies] = useState(() => {
    return JSON.parse(window.localStorage.getItem('savedMovies')) ?? [];
  });

  useEffect(() => {
    if (!moviesQuery) {
      return;
    }

    async function getMovies() {
      try {
        const movs = await searchMovies(moviesQuery);
        setMovies([...movs]);
        localStorage.setItem('savedMovies', JSON.stringify(movs));
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
                  <NavLink
                    to={`${id}`}
                    state={{
                      from: location,
                      label: 'back to search results',
                      originPath: 'movies',
                    }}
                    className={css.moviespage__link}
                  >
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
