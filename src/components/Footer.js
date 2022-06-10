import { Link } from "react-router-dom";
//css
import "../css/footer.css";
//rel="noopener noreferrer" recomendacion de react para link externos a la app.
function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            About
          </Link>
        </li>
      </ul>
      <p className="text-center text-muted">© 2022 arielszy</p>
    </footer>
  );
}

export default Footer;
