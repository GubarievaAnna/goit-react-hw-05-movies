function TrendingList({ movies }) {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>{el.title ? el.title : el.name}</li>
      ))}
    </ul>
  );
}

export default TrendingList;
