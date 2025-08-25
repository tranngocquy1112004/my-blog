import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import '../style/PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posts.json')  // Fetch file local
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        const foundPost = data.find(p => p.id === parseInt(id));  // Tìm post theo id
        setPost(foundPost);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (!post) return <div className="post-not-found">Post not found</div>;

  return (
    <div className="post-detail-container">
      <h1 className="post-detail-title">{post.title}</h1>
      <p className="post-detail-content">{post.body}</p>
    </div>
  );
}

export default PostDetail;