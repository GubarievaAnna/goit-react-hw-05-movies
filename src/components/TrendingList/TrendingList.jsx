import { Link } from 'react-router-dom';
import s from './TrendingList.module.css';

function TrendingList({ movies }) {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id} className={s.link}>
          <Link to={`movies/${el.id}`}>{el.title ? el.title : el.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TrendingList;
