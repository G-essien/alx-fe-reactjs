// src/components/BlogPost.jsx
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return <div>Blog Post Content for post ID: {postId}</div>;
};

export default BlogPost;
