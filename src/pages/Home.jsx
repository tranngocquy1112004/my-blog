import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Blog</h1>
      <p className="home-description">Check out the <Link to="/blog" className="home-link">latest posts</Link>.</p>
    </div>
  );
}

export default Home;