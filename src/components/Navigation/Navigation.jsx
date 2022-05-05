import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? `${css.activeLink}` : `${css.link}`
      }
    >
      home
    </NavLink>

    <NavLink
      to="/movies"
      className={({ isActive }) =>
        isActive ? `${css.activeLink}` : `${css.link}`
      }
    >
      movies
    </NavLink>
  </nav>
);

export default Navigation;
