import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../utils/Api';
import Section from '../components/Section/Section';
import TrendingList from '../components/TrendingList/TrendingList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Section title="Trending today">
      {movies && <TrendingList movies={movies} />}
    </Section>
  );
}

export default Home;
