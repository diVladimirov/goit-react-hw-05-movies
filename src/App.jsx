import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppStyled } from 'App.styled';
import GlobalStyle from 'constants/GlobalStyle';

import Navigation from 'components/Navigation/Navigation';

// import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';

// import MoviesPage from 'pages/MoviesPage';

const HomePage = lazy(() =>
  import('./pages/HomePage.js' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Navigation />
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:moviesId">
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </AppStyled>
    </>
  );
};

export default App;
