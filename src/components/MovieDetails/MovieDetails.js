import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import {
  SectionStyled,
  LinksWrapperStyled,
  NavLinkStyled,
} from './MovieDetails.styled';
import { ButtonStyled } from 'components/Movies/Movies.styled';

const MovieDetails = ({ film, onGoBack }) => {
  const { url } = useRouteMatch();
  const location = useLocation();

  const {
    original_title,
    release_date,
    overview,
    backdrop_path,
    title,
    vote_average,
    genres,
    poster_path,
  } = film;
  return (
    <SectionStyled>
      <ButtonStyled type="button" onClick={onGoBack}>
        Go back
      </ButtonStyled>
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

      <p>Release date: {release_date}</p>
      {
        <p>
          User score:
          {vote_average !== 0 ? (
            <span> {vote_average}</span>
          ) : (
            <span>not scored yet</span>
          )}
        </p>
      }

      <ul>
        <p>Genres:</p>
        {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
      <p>{overview}</p>
      <LinksWrapperStyled>
        <NavLinkStyled
          to={{
            pathname: `${url}/cast`,
            state: { from: location?.state?.from },
          }}
        >
          Cast
        </NavLinkStyled>
        <NavLinkStyled
          to={{
            pathname: `${url}/reviews `,
            state: { from: location?.state?.from },
          }}
        >
          Reviews
        </NavLinkStyled>
      </LinksWrapperStyled>
    </SectionStyled>
  );
};

export default MovieDetails;
// to={`${url}/cast`}
// to={`${url}/reviews `}
