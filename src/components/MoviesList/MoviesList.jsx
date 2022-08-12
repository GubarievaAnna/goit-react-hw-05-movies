import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(el => (
        <li key={el.id} className={s.item}>
          <Link to={`/movies/${el.id}`} state={location} className={s.link}>
            {el.title ? el.title : el.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
