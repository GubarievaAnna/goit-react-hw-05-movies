import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../utils/Api';
import s from './Reviews.module.css';
import SectionMoreInfo from 'components/SectionMoreInfo/SectionMoreInfo';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        if (data.length === 0) {
          setStatus('rejected');
          return;
        }
        setReviews(data);
        setStatus('resolved');
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <SectionMoreInfo title="Reviews">
      {status === 'resolved' && (
        <ul>
          {reviews.map(el => (
            <li key={el.id} className={s.item}>
              <p className={s.author}>{` Author: ${el.author}`}</p>
              <p className={s.text}>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
      {status === 'rejected' && (
        <div className={s.noInfo}>
          {' '}
          We don't have any reviews for this movie{' '}
        </div>
      )}
    </SectionMoreInfo>
  );
}

export default Reviews;
