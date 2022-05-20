import { Link } from "react-router-dom";
import "../App.css";


function Header() {
  return (
    <header>
      <nav>
        <Link to="/home" style={{textDecoration: 'none'}}>
          <h3>Home</h3>
        </Link>
        <Link to="/about" style={{textDecoration: 'none'}}>
          <h3>About</h3>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
