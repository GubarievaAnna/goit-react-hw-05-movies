import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import placeholder from '../../images/not-found.png';
import s from './MovieInfo.module.css';

function MovieInfo({ info }) {
  const location = useLocation();

  const navigate = useNavigate();
  const {
    overview,
    vote_average,
    genres,
    poster_path,
    release_date,
    original_title,
  } = info;

  const normalizedUserScore = (vote_average * 10).toFixed(0);
  const normalizedYearOfMovie = release_date.split('-')[0];
  const normalizedGenres = genres.map(el => el.name).join(', ');

  return (
    <>
      <button className={s.button} onClick={() => navigate(location.state)}>
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
            <NavLink
              to="cast"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              state={location.state}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="reviews"
              state={location.state}
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

MovieInfo.propTypes = {
  info: PropTypes.shape({
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    original_title: PropTypes.string,
  }),
};

export default MovieInfo;
