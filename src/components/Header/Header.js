import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import stylesHeader from './Header.module.css';

const Header = () => {
  return (
    <header className={stylesHeader.Header}>
      <h1 className={stylesHeader.Logo}>
        <Link className={stylesHeader.LogoLink} to='/'>
          goit-hw-04-movies
        </Link>
      </h1>
      <nav className={stylesHeader.Navigation}>
        <ul className={stylesHeader.navList}>
          <li className={stylesHeader.navItem}>
            <NavLink
              className={stylesHeader.navLink}
              activeClassName={stylesHeader.navLinkActive}
              exact
              to={routes.HOME}>
              Home
            </NavLink>
          </li>
          <li className={stylesHeader.navItem}>
            <NavLink
              className={stylesHeader.navLink}
              activeClassName={stylesHeader.navLinkActive}
              to={routes.MOVIES}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
