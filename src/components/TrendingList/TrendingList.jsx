import { Link } from 'react-router-dom';

function TrendingList({ movies }) {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`movies/${el.id}`}>{el.title ? el.title : el.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TrendingList;
