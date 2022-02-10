import { useState, useEffect } from 'react';

import GetProperties from 'helpers/GetProperties';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../services/api';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setFilms(GetProperties(data.results));
    });
  }, []);

  return (
    <>
      <ul>
        {films &&
          films.map(({ id, title, backdrop_path, poster_path }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                <h2>{title}</h2>
                {backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt={title}
                  />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                )}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
