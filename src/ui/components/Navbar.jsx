import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-block-buster.png';
import { Search } from '../';
import { useUiStore } from '../../hooks';
import { useState } from 'react';

export const Navbar = () => {
  const { openModalSearch } = useUiStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openSearch = () => openModalSearch();

  const toggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <nav className="navigation" aria-label="Navegación">
            <div className="logo">
              <img src={logo} alt="Logo block master" />
            </div>
            <ul className={!isMenuOpen ? 'items' : 'items item-show'}>
              <li className="item">
                <NavLink
                  className={({ isActive }) => `${isActive ? 'active' : ''}`}
                  to="/"
                  aria-current="page"
                >
                  Todas
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={({ isActive }) => `${isActive ? 'active' : ''}`}
                  to="top-rated"
                  aria-current="page"
                >
                  Más valoradas
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={({ isActive }) => `${isActive ? 'active' : ''}`}
                  to="less-rated"
                  aria-current="page"
                >
                  Menos valoradas
                </NavLink>
              </li>
            </ul>
            <div className="search-contet">
              <Search />
            </div>
            <div className="search-hamburguer">
              <button onClick={openSearch} className="btn-icon">
                <i className="icon-search" aria-hidden="true"></i>
              </button>
              <button onClick={toggle} className="btn-icon">
                <i
                  className={`${!isMenuOpen ? 'icon-menu' : 'icon-delete'}`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
