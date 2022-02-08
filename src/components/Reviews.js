import React from 'react';

const Reviews = ({ reviews }) => {
  console.log(reviews.results.length);
  return (
    <>
      {reviews.results.length !== 0 ? (
        reviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </>
  );
};

export default Reviews;
