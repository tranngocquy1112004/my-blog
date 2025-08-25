import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import Loading from './Loading';
import Pagination from './Pagination';
import '../style/PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetch('/posts.json')  // Thay đổi URL thành file local
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);  // Không cần slice vì file nhỏ
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <Loading />;

  return (
    <div>
      {/* Display current posts */}
      <div className="posts-container">
        {currentPosts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination info */}
      <div className="pagination-info">
        Showing {indexOfFirstPost + 1} to {Math.min(indexOfLastPost, posts.length)} of {posts.length} posts
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default PostList;