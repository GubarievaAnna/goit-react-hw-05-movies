import placeholder from '../../images/not-found.png';
import { NavLink, useNavigate } from 'react-router-dom';
import s from './MovieInfo.module.css';

function MovieInfo({ info }) {
  const navigate = useNavigate();
  const {
    overview,
    vote_average,
    genres,
    poster_path,
    release_date,
    original_title,
  } = info;

  const onPrevPageGo = () => {
    navigate(-1);
  };

  const normalizedUserScore = (vote_average * 10).toFixed(0);
  const normalizedYearOfMovie = release_date.split('-')[0];
  const normalizedGenres = genres.map(el => el.name).join(', ');

  return (
    <>
      <button className={s.button} onClick={onPrevPageGo}>
        Go back
      </button>
      <div className={s.info}>
        <img
          className={s.picture}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : placeholder
          }
          alt={`Poster of movie ${original_title}`}
        />
        <div className={s.text}>
          <h2
            className={s.title}
          >{`${original_title} (${normalizedYearOfMovie})`}</h2>
          <p className={s.text}>
            <span className={s.accent}>User score:</span> {normalizedUserScore}%
          </p>
          <p className={s.text}>
            <span className={s.accent}>Overview:</span> {overview}
          </p>
          <p className={s.text}>
            <span className={s.accent}>Genres:</span> {normalizedGenres}
          </p>
        </div>
      </div>
      <div className={s.moreInfo}>
        <p className={s.moreTitle}>Additional information</p>
        <ul>
          <li className={s.item}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MovieInfo;
