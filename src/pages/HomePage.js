import { useState, useEffect } from 'react';
import GetProperties from 'helpers/GetProperties';
import { fetchTrendingMovies } from '../services/api';
import Home from 'components/Home/Home';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setFilms(GetProperties(data.results));
    });
  }, []);

  return <Home films={films} />;
};

export default HomePage;
