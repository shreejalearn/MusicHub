import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BlogPostDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const title = queryParams.get('title');
  const content = queryParams.get('content');
  const imageUrl = queryParams.get('imageUrl');

  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt="Blog Post" />
      <p>{content}</p>
      {/* Render the rest of the blog post details */}
    </div>
  );
};

export default BlogPostDetails;
