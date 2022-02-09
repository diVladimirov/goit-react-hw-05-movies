import { useState, useEffect } from 'react';
import { fetchMoviesFromQuery } from 'services/api';
import { Link, useRouteMatch } from 'react-router-dom';

const MoviesPage = () => {
  const [movieToFind, setMovieToFind] = useState('');
  const [moviesList, setMovieList] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (movieToFind === '') {
      return;
    }
    fetchMoviesFromQuery(movieToFind)
      .then(({ data }) => {
        setMovieList(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieToFind]);

  const handleSubmit = event => {
    event.preventDefault();
    setMovieToFind(event.target.movieToFind.value);
    event.target.movieToFind.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie to find..."
          name="movieToFind"
        ></input>
        <button type="submit">Search Movies</button>
      </form>
      <ul>
        {moviesList &&
          moviesList.map(
            ({
              original_title,
              id,
              overview,
              backdrop_path,
              title,
              poster_path,
            }) => (
              <li key={id}>
                <Link to={`${url}/${id}`}>
                  <h2>{original_title}</h2>
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
                <p>{overview}</p>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default MoviesPage;
