import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import { ThreeDots } from 'react-loader-spinner';

const HomePage = lazy(() =>
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

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<ThreeDots color="black" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" exact element={<MoviesPage />} />
            <Route
              path="movies/:movieId/*"
              exact
              element={<MovieDetailsPage />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />{' '}
        </Routes>
      </Suspense>
    </>
  );
};
