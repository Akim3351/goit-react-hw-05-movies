import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';

import { searchMovies } from 'services/API/SearchMovies';
import Searchbar from 'components/Searchbar/Searchbar';

export default function MoviesPage() {
  const location = useLocation();
  const [moviesQuery, setMoviesQuery] = useState(() => {
    return window.localStorage.getItem('moviesQuery') ?? '';
  });
  const [urlQuery, setUrlQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const currentSearchParam = urlQuery.get('query');

  useEffect(() => {
    if (moviesQuery === '') {
      return;
    }

    setUrlQuery({ query: moviesQuery });

    async function getMovies() {
      try {
        const movs = await searchMovies(moviesQuery);
        setMovies([...movs]);
        localStorage.setItem('moviesQuery', moviesQuery);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [moviesQuery, setUrlQuery]);

  useEffect(() => {
    if (currentSearchParam) {
      setMoviesQuery(currentSearchParam);
    }
  }, [currentSearchParam]);

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
                      originPath: '/movies',
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
