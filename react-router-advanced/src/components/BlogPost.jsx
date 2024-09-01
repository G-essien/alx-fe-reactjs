// src/components/BlogPost.jsx
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Retrieves the `id` from the URL

  // You can fetch the blog post data using the `id` here

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Render blog post content based on the `id` */}
    </div>
  );
};

export default BlogPost;
