import { useState, useEffect } from 'react';
import { useParams, Route } from 'react-router';
import {
  useHistory,
  useLocation,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import { fetchFilmsDetails } from '../services/api';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState([]);
  const data = useParams();
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchFilmsDetails(data.moviesId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch(error => console.log(error));
  }, [data.moviesId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  const {
    original_title,
    release_date,
    overview,
    backdrop_path,
    title,
    vote_average,
    genres,
    credits,
    reviews,
  } = film;
  console.log(film);
  return (
    <>
      <section>
        <h2>{original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
        />

        <p>{release_date}</p>
        <p>User Score: {vote_average}</p>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
        <p>{overview}</p>
        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews `}>Reviews</NavLink>

        <button type="button" onClick={onGoBack}>
          Go back
        </button>
      </section>
      <Route path={`${url}/cast`}>
        <Cast credits={credits} />
      </Route>
      <Route path={`${url}/reviews `}>
        <Reviews reviews={reviews} />
      </Route>
    </>
  );
};

export default MovieDetailsPage;

// const movieID = useParams();
// const id = Object.values(movieID);