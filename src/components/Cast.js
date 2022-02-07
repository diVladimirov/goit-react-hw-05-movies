import React from 'react';

const Cast = ({ credits }) => {
  return (
    <>
      {credits &&
        credits.cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
    </>
  );
};

export default Cast;