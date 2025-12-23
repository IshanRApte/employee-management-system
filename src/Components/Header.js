import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">MyReactApp</div>
      <nav>
        <ul className="nav-links">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
