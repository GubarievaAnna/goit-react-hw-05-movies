import { Link } from 'react-router-dom';

function SearchList({ movies }) {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`${el.id}`}>{el.title ? el.title : el.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
