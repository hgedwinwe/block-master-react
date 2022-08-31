import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-block-buster.png';

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <nav className="navigation">
            <div className="logo">
              <img src={logo} alt="Logo block master" />
            </div>
            <ul className="items">
              <li className="item">
                <NavLink
                  className={({ isActive }) => `${isActive ? 'active' : ''}`}
                  to="/"
                >
                  Todas
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={({ isActive }) => `${isActive ? 'active' : ''}`}
                  to="top-rated"
                >
                  Más valoradas
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={({ isActive }) => `${isActive ? 'active' : ''}`}
                  to="less-rated"
                >
                  Menos valoradas
                </NavLink>
              </li>
            </ul>
            <div className="search">
              <form>
                <div className="input-search">
                  <input
                    type="text"
                    placeholder="Buscar tu pelicula favorita"
                  />
                  <span>
                    <i className="icon-search"></i>
                  </span>
                </div>
              </form>
            </div>
            <div className="search-hamburguer">
              <button className="btn-icon">
                <i className="icon-search"></i>
              </button>
              <button className="btn-icon">
                <i className="icon-menu"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
