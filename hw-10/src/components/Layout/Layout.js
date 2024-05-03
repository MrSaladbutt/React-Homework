import { NavLink, Outlet } from 'react-router-dom';
import layoutStyles from './layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <ul className={layoutStyles.nav}>
          <li className={layoutStyles.navli}>
            <NavLink to="/">Головна</NavLink>
          </li>
          <li className={layoutStyles.navli}>
            <NavLink to="/todo-list">Список завдань</NavLink>
          </li>
          <li className={layoutStyles.navli}>
            <NavLink to="/about">Про застосунок</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={layoutStyles.footer}>All rights reserved </footer>
    </>
  );
};

export default Layout;
