import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id} className={s.link}>
          <Link to={`/movies/${el.id}`}>{el.title ? el.title : el.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
