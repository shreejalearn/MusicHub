import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, content, imageUrl }) => {
  const queryParams = new URLSearchParams();
  queryParams.append('title', title);
  queryParams.append('content', content);
  queryParams.append('imageUrl', imageUrl);

  const queryString = queryParams.toString();

  return (
    <Link
      to={`/blog/${id}?${queryString}`}
      className="block bg-yellow2-resonate p-8 shadow-md rounded-lg m-4 w-[600px] text-black no-underline hover:underline"
    >
      <img src={imageUrl} alt="Blog Post" className="mb-4 rounded-lg" />
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
    </Link>
  );
};

export default BlogPost;
//