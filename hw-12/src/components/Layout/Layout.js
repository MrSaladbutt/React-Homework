import { Link, NavLink, Outlet } from "react-router-dom";
import layoutStyles from "./layout.module.css";
import userIcon from "../../assets/free-icon-user-482636.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

const Layout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <header>
        <ul className={layoutStyles.nav}>
          <li className={layoutStyles.navli}>
            <NavLink to="/">Головна</NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li className={layoutStyles.navli}>
                <NavLink to="/todo-list">Список завдань</NavLink>
              </li>
              <li className={layoutStyles.navli}>
                <NavLink to="/about">Про застосунок</NavLink>
              </li>
              <li className={layoutStyles.navli}>
                <Link
                  to="/login"
                  onClick={() => {
                    setIsAuthenticated(false);
                    localStorage.removeItem("login");
                    localStorage.removeItem("email");
                  }}
                >
                  Вийти
                </Link>
              </li>
            </>
          ) : (
            <li className={layoutStyles.navli}>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
        {isAuthenticated ? (
          <div className={layoutStyles.user}>
            <img className={layoutStyles.icon} src={userIcon} alt="" />
            {user.username}
          </div>
        ) : (
          ""
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={layoutStyles.footer}>All rights reserved </footer>
    </>
  );
};

export default Layout;
