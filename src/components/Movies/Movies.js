import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { FormStyled, InputStyled, ButtonStyled } from './Movies.styled';
import { ListStyled } from 'components/Home/Home.styled';

const Movies = ({ handleSubmit, moviesList }) => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="Enter movie to find..."
          name="movieToFind"
        ></InputStyled>
        <ButtonStyled type="submit">Search Movies</ButtonStyled>
      </FormStyled>
      <ListStyled>
        {moviesList &&
          moviesList.map(
            ({ original_title, id, backdrop_path, title, poster_path }) => (
              <li key={id}>
                <Link
                  to={{
                    pathname: `${url}/${id}`,
                    state: { from: location },
                  }}
                >
                  <p>{original_title}</p>
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
            )
          )}
      </ListStyled>
    </>
  );
};

export default Movies;
