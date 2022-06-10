//libraries
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="d-flex justify-content-center py-3">
      <p className="navbar-brand" to="/">
        Skill up 1 react
      </p>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/Listado">
            Listado
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/Contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
