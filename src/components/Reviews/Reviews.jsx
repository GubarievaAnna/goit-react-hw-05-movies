import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../utils/Api';
import s from './Reviews.module.css';
import SectionMoreInfo from 'components/SectionMoreInfo/SectionMoreInfo';

function Reviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <SectionMoreInfo title="Reviews">
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(el => (
            <li key={el.id} className={s.item}>
              <p className={s.author}>{` Author: ${el.author}`}</p>
              <p className={s.text}>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.noInfo}>We don't have any reviews for this movie</div>
      )}
    </SectionMoreInfo>
  );
}

export default Reviews;
