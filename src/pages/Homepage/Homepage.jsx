import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Homepage.module.css';
import { fetchTrendMovies } from 'services/API/FetchTrendMovies';

export default function Homepage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const res = await fetchTrendMovies();
        setTrendingMovies([...res]);
      } catch (error) {
        console.log(error);
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      <ul className={css.homepage__list}>
        {trendingMovies &&
          trendingMovies.map(movie => {
            const { id, title } = movie;
            return (
              <li key={id} className={css.homepage__item}>
                <NavLink to={`movies/${id}`} className={css.homepage__link}>
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
