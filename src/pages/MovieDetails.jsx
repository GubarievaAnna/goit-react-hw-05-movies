import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieById } from '../utils/Api';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';

function MovieDetails() {
  const [info, setInfo] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId)
      .then(data => {
        setInfo(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Section>
        {info && <MovieInfo info={info} />}
        <MovieAddInfo />
      </Section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
