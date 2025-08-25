import { Link } from 'react-router-dom';
import '../style/NotFound.css';

function NotFound() {
    return (
      <div className="not-found-container">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-home-link">Back to Home</Link>
      </div>
    );
  }
  
  export default NotFound;