import { useState, useEffect } from 'react';
import { fetchMoviesFromQuery } from 'services/api';
import { useLocation, useHistory } from 'react-router-dom';
import Movies from 'components/Movies/Movies';

const MoviesPage = () => {
  const [moviesList, setMovieList] = useState([]);
  const history = useHistory();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const correctInput = search.slice(12, search.length);
    if (correctInput === '') {
      return;
    }
    fetchMoviesFromQuery(correctInput)
      .then(({ data }) => {
        setMovieList(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [search]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);

    history.push({
      pathname: pathname,
      search: `query=${event.target.movieToFind.value}`,
    });

    event.target.movieToFind.value = '';
  };

  return <Movies onSubmit={handleSubmit} moviesList={moviesList} />;
};

export default MoviesPage;
