import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
const Homepage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);

const Cast = lazy(() =>
  import('./pages/Cast/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('./pages/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="movies" exact element={<MoviesPage />} />
            <Route path="movies/:movieId" exact element={<MovieDetailsPage />}>
              <Route path="cast" exact element={<Cast />} />
              <Route path="reviews" exact element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />{' '}
        </Routes>
      </Suspense>
    </>
  );
};
