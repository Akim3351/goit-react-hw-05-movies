import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
const Homepage = lazy(() =>
  import('./pages/Homepage/Homepage.jsx' /* webpackChunkName: "home-page" */)
);
// import Homepage from './pages/Homepage/Homepage';
const MoviesPage = lazy(() =>
  import(
    './pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  )
);

// import MoviesPage from './pages/MoviesPage/MoviesPage';
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  )
);

// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
const Cast = lazy(() =>
  import('./components/Cast/Cast.jsx' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('./components/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */)
);

// import Cast from './components/Cast/Cast';
// import Reviews from './components/Reviews/Reviews';

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
        </Routes>
      </Suspense>
    </>
  );
};
