import { Link } from 'react-router-dom';
import '../style/PostItem.css';

function PostItem({ post }) {
  return (
    <div className="post-item">
      <h2 className="post-title">
        {post.title}
      </h2>
      <p className="post-excerpt">
        {post.body.substring(0, 150)}...
      </p>
      <Link 
        to={`/blog/${post.id}`}
        className="read-more-link"
      >
        Read More →
      </Link>
    </div>
  );
}

export default PostItem;