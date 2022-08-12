import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../utils/Api';
import placeholder from '../../images/not-found.png';

function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(el => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : placeholder
                }
                alt={el.name}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Sorry, we don't have information about cast of this movie</div>
      )}
    </>
  );
}

export default Cast;
