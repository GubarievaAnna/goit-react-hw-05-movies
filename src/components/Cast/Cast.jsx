import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../utils/Api';
import placeholder from '../../images/not-found.png';
import SectionMoreInfo from 'components/SectionMoreInfo/SectionMoreInfo';
import s from './Cast.module.css';

function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <SectionMoreInfo title="Cast">
      {cast && cast.length > 0 ? (
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
              <p className={s.name}>{el.name}</p>
              <p className={s.character}>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Sorry, we don't have information about cast of this movie</div>
      )}
    </SectionMoreInfo>
  );
}

export default Cast;
