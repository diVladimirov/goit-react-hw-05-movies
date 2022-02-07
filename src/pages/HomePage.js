import { useState, useEffect } from 'react';
import { fetchFilms } from '../services/api';
import GetProperties from 'helpers/GetProperties';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../services/api';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchFilms(page)
  //     .then(({ data }) => {
  //       setFilms(prevFilms => [...prevFilms, ...GetProperties(data.results)]);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //     .finally(setIsLoading(false));
  // }, [page]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setFilms(GetProperties(data.results));
    });
  }, []);

  return (
    <>
      <ul>
        {films &&
          films.map(({ id, title, backdrop_path }) => (
            <li key={id}>
              <h2>{title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
                alt={title}
              />
              {/* <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: { from: location },
                }}
              >
                About movie
              </Link> */}
              <Link to={`/movies/${id}`}>About movie</Link>
            </li>
          ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          setPage(prevPage => prevPage + 1);
        }}
      >
        Add
      </button>
    </>
  );
};

export default HomePage;