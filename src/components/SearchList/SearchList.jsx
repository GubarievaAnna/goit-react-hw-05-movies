import { Link } from 'react-router-dom';
import s from './SearchList.module.css';

function SearchList({ movies }) {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id} className={s.link}>
          <Link to={`${el.id}`}>{el.title ? el.title : el.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
