import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './HomePage.module.css';
import { fetchTrendMovies } from 'services/API/FetchTrendMovies';

export default function Homepage() {
  const location = useLocation();
  const [lastFetchTrendMovsDate, setLastFetchTrendMovsDate] = useState(() => {
    return localStorage.getItem('fetchDate') ?? Date.now();
  });
  const [trendingMovies, setTrendingMovies] = useState(() => {
    return JSON.parse(window.localStorage.getItem('trendMovies')) ?? '';
  });

  useEffect(() => {
    async function getTrendingMovies() {
      const deltaTime = Date.now() - lastFetchTrendMovsDate;
      const minimalInterval = 600000;

      if (deltaTime < minimalInterval && trendingMovies !== '') {
        return;
      }

      try {
        const res = await fetchTrendMovies();
        setTrendingMovies([...res]);
        localStorage.setItem('trendMovies', JSON.stringify(res));
        setLastFetchTrendMovsDate(Date.now());
        localStorage.setItem('fetchDate', Date.now());
      } catch (error) {
        console.log(error);
      }
    }
    getTrendingMovies();
  }, [lastFetchTrendMovsDate]);
  return (
    <div>
      <ul className={css.homepage__list}>
        {trendingMovies &&
          trendingMovies.map(movie => {
            const { id, title } = movie;
            return (
              <li key={id} className={css.homepage__item}>
                <NavLink
                  to={`movies/${id}`}
                  state={{
                    from: location,
                    label: 'back to popular movies',
                    originPath: '/',
                  }}
                  className={css.homepage__link}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
