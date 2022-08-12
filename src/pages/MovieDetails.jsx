import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from '../utils/Api';
import MovieInfo from '../components/MovieInfo/MovieInfo';

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
      <button>Go back</button>
      {info && <MovieInfo info={info} />}
      <Outlet />
    </>
  );
}

export default MovieDetails;
