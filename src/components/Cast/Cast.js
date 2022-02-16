const Cast = ({ credits }) => {
  return (
    <>
      <ul>
        {credits &&
          credits.cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
