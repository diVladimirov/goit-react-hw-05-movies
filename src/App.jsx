import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navigation from 'components/Navigation';
import MoviesPage from 'components/MoviesPage';

const App = () => {
  return (
    <>
      <Navigation />
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
        <Route path="/movies/:movieId/cast"></Route>
        <Route path="/movies/:movieId/reviews"></Route>
        {/* <Redirect from="/" to=":moviesId" /> */}
      </Switch>
    </>
  );
};

export default App;
