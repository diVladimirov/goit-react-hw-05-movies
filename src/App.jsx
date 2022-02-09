import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      </Switch>
    </>
  );
};

export default App;
