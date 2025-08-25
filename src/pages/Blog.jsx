import PostList from '../components/PostList';
import '../style/Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">
        Blog Posts
      </h1>
      <PostList />
    </div>
  );
}

export default Blog;