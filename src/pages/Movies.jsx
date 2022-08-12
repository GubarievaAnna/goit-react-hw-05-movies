import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from '../utils/Api';
import Searchbar from '../components/Searchbar/Searchbar';
import Section from '../components/Section/Section';
import MoviesList from '../components/MoviesList/MoviesList';

function Movies() {
  const [keyWord, setKeyWord] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const onSubmitSearch = key => setKeyWord(key);

  useEffect(() => {
    if (keyWord === '') return;
    const normalizedKeyWord = keyWord.toLowerCase().trim();
    fetchSearchMovies(normalizedKeyWord)
      .then(data => {
        if (data.length === 0) {
          setMovies([]);
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.',
            {
              autoClose: 2000,
              theme: 'colored',
            }
          );
          return;
        }
        setMovies(data);
      })
      .catch(error => console.log(error))
      .finally(() => {
        navigate(`?query=${normalizedKeyWord}`);
      });
    // eslint-disable-next-line
  }, [keyWord]);

  return (
    <Section>
      <Searchbar onSubmitSearch={onSubmitSearch} />
      {movies && movies.length > 0 && <MoviesList movies={movies} />}
    </Section>
  );
}

export default Movies;
