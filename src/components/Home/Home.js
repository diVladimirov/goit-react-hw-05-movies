import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListStyled, TitleStyled } from './Home.styled';
import PropTypes from 'prop-types';

const Home = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <TitleStyled>Trending Today</TitleStyled>
      <ListStyled>
        {films &&
          films.map(({ id, title, backdrop_path, poster_path }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                <p>{title}</p>
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
      </ListStyled>
    </>
  );
};

export default Home;

Home.propTypes = {
  films: PropTypes.array.isRequired,
};
