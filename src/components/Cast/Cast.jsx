import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../utils/Api';
import placeholder from '../../images/not-found.png';
import SectionMoreInfo from 'components/SectionMoreInfo/SectionMoreInfo';
import s from './Cast.module.css';

function Cast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(data => {
        if (data.length === 0) {
          setStatus('rejected');
          return;
        }
        setCast(data);
        setStatus('resolved');
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <SectionMoreInfo title="Cast">
      {status === 'resolved' && (
        <ul className={s.list}>
          {cast.map(el => (
            <li key={el.id} className={s.item}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : placeholder
                }
                alt={el.name}
              />
              <p className={s.name}>
                <span className={s.accent}>Name:</span> {el.name}
              </p>
              <p className={s.character}>
                <span className={s.accent}>Character:</span> {el.character}
              </p>
            </li>
          ))}
        </ul>
      )}
      {status === 'rejected' && (
        <div className={s.noInfo}>
          Sorry, we don't have information about cast of this movie
        </div>
      )}
    </SectionMoreInfo>
  );
}

export default Cast;
