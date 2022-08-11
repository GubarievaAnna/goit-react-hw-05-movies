import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from '../utils/Api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';

function Movies() {
  const [keyWord, setKeyWord] = useState('');
  const [movies, setMovies] = useState([]);

  const onSubmitSearch = key => setKeyWord(key);

  useEffect(() => {
    if (keyWord === '') return;
    const normalizedKeyWord = keyWord.toLowerCase().trim();
    fetchSearchMovies(normalizedKeyWord)
      .then(data => {
        if (data.length === 0) {
          toast.warn(
            'Sorry, there are no images matching your search query. Please try again.',
            {
              autoClose: 2000,
              theme: 'colored',
            }
          );
          return;
        }
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, [keyWord]);

  return (
    <Section>
      <Searchbar onSubmitSearch={onSubmitSearch} />
      {movies && <MoviesList movies={movies} />}
    </Section>
  );
}

export default Movies;
