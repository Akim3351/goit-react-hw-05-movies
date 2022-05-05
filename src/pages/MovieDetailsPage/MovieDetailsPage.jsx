import { useEffect, useState } from 'react';
import { useNavigate, NavLink, useParams, Outlet } from 'react-router-dom';
import GetMovieId from 'services/API/GetMovieId';
import css from './MovieDetailsPage.module.css';
import { BiArrowBack } from 'react-icons/bi';

export default function MovieDetailsPage() {
  const navigate = useNavigate();
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

  const onBackClick = () => {
    navigate(-1);
  };

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
      <button className={css.backbutton} type="button" onClick={onBackClick}>
        <BiArrowBack />
        GO BACK
      </button>

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
            className={({ isActive }) =>
              isActive ? `${css.activeLink}` : `${css.link}`
            }
          >
            Cast
          </NavLink>

          <NavLink
            to={'reviews'}
            className={({ isActive }) =>
              isActive ? `${css.activeLink}` : `${css.link}`
            }
          >
            Reviews
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
