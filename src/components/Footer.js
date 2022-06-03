//css
import '../css/footer.css';
//rel="noopener noreferrer" recomendacion de react para link externos a la app.
function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </li>
          <li>
            <p>copyright whatever</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
