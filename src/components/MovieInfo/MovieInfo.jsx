import Section from 'components/Section/Section';
import { NavLink } from 'react-router-dom';
import placeholder from '../../images/not-found.png';

function MovieInfo({ info }) {
  console.log(info);
  const {
    overview,
    vote_average,
    genres,
    poster_path,
    release_date,
    original_title,
  } = info;

  const normalizedUserScore = (vote_average * 10).toFixed(0);
  const normalizedYearOfMovie = release_date.split('-')[0];
  const normalizedGenres = genres.map(el => el.name).join(', ');

  return (
    <Section>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : placeholder
        }
        alt={`Poster of movie ${original_title}`}
      />
      <h2>{`${original_title} (${normalizedYearOfMovie})`}</h2>
      <p>User score: {normalizedUserScore}%</p>
      <p>Overview: {overview}</p>
      <p>Genres: {normalizedGenres}</p>
      <p>Additional information</p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </Section>
  );
}

export default MovieInfo;
