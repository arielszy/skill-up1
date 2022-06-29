//libraries
import React from "react";
import { Link } from "react-router-dom";
//coponents
import Buscador from "./Buscador";
function Header() {
  return (
    <header className="d-flex justify-content-center py-3">
      <p className="navbar-brand" to="/">
        Skill up 1 react
      </p>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/listado">
            Listado
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <Buscador/>
        </li>
      </ul>
    </header>
  );
}

export default Header;
