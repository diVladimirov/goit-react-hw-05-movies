import { useState, useEffect } from 'react';
import { fetchMoviesFromQuery, fetchTrendingMovies } from 'services/api';
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
    // console.log(event.target.movieToFind.value);
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
            ({ original_title, id, overview, backdrop_path, title }) => (
              <li key={id}>
                <h2>{original_title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={title}
                />
                <p>{overview}</p>
                <Link to={`${url}/${id}`}>to movie</Link>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default MoviesPage;