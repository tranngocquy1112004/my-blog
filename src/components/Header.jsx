import { Link } from 'react-router-dom';
import '../style/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
}

export default Header;