import { Link } from "react-router-dom";
//css
import "../css/footer.css";
//rel="noopener noreferrer" recomendacion de react para link externos a la app.
function Footer() {
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted">
            About
          </Link>
        </li>
      </ul>
      <p class="text-center text-muted">© 2022 arielszy</p>
    </footer>
  );
}

export default Footer;
