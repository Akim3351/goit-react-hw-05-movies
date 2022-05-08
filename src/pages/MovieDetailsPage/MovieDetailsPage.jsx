import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useLocation,
  useParams,
  Route,
  NavLink,
  Link,
  Routes,
} from 'react-router-dom';
import GetMovieId from 'services/API/GetMovieId';
import css from './MovieDetailsPage.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { ThreeDots } from 'react-loader-spinner';

const Cast = lazy(() =>
  import('../../pages/Cast/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('../../pages/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    async function getMovieById() {
      if (movie.id === movieId) {
        return;
      }
      const getById = await GetMovieId(movieId);
      setMovie({ ...getById });
    }
    getMovieById();
  }, [movieId, movie.id]);

  const { title, poster_path, popularity, overview, genres, backdrop_path } =
    movie;

  const originPath = location?.state?.originPath ?? '/';
  const label = location?.state?.label ?? 'back';

  if (!movie) {
    return;
  }

  return (
    <div
      className={css.movie__wrapper}
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${backdrop_path}`,
      }}
    >
      <Link to={originPath} className={css.backlink}>
        <BiArrowBack />
        {label ?? 'go back'}
      </Link>

      <div className={css.movie__main}>
        <img
          className={css.movie__poster}
          src={
            poster_path && `https://image.tmdb.org/t/p/original/${poster_path}`
          }
          alt={title}
        ></img>
        <div className={css.descr__wrapper}>
          <h2>{title}</h2>
          <p>Popularity: {popularity}</p>
          <p className={css.descr__subtitle}>Overview</p>
          <p className={css.descr__overwiew}>{overview}</p>
          <p className={css.descr__subtitle}>Genres</p>
          {
            <ul className={css.genres__list}>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          }
        </div>
      </div>
      <div>
        <h3 className={css.additional__subheader}>Additional information</h3>
        <nav className={css.movie__navigation}>
          <NavLink
            to={'cast'}
            state={{ originPath: originPath, label: label }}
            className={({ isActive }) =>
              isActive ? `${css.activeLink}` : `${css.link}`
            }
          >
            Cast
          </NavLink>

          <NavLink
            to={'reviews'}
            state={{ originPath: originPath, label: label }}
            className={({ isActive }) =>
              isActive ? `${css.activeLink}` : `${css.link}`
            }
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<ThreeDots color="black" />}>
        <Routes>
          <Route path="/cast" exact element={<Cast />} />
          <Route path="/reviews" exact element={<Reviews />} />
        </Routes>
      </Suspense>

      {/* <Outlet /> */}
    </div>
  );
}
