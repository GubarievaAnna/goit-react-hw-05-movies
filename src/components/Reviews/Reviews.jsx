import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../utils/Api';

function Reviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <p>Author: {el.author}</p>
              {el.content}
              <p></p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
}

export default Reviews;
