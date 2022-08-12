import { NavLink, useLocation } from 'react-router-dom';
import s from './MovieAddInfo.module.css';

function MovieAddInfo() {
  const location = useLocation();
  return (
    <div className={s.moreInfo}>
      <p className={s.moreTitle}>Additional information</p>
      <ul>
        <li className={s.item}>
          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            state={location.state}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="reviews"
            state={location.state}
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MovieAddInfo;
