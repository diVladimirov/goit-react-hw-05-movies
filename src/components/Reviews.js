import React from 'react';

const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      {reviews &&
        reviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
    </>
  );
};

export default Reviews;
