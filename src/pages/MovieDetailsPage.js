import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Route } from 'react-router';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { fetchFilmsDetails } from '../services/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const Cast = lazy(() =>
  import(
    '../components/Cast/Cast.js' /* webpackChunkName: "movieDetailsPage-cast" */
  )
);
const Reviews = lazy(() =>
  import(
    '../components/Reviews/Reviews.js' /* webpackChunkName: "movieDetailsPage-reviews" */
  )
);

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

  const { credits, reviews } = film;

  return (
    <>
      <MovieDetails onGoBack={onGoBack} film={film} />
      <Suspense fallback={<h1>Loading Cast or Reviews</h1>}>
        <Route path={`${url}/cast`}>
          <Cast credits={credits} />
        </Route>
        <Route path={`${url}/reviews `}>
          <Reviews reviews={reviews} />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
