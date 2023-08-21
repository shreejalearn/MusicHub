import React from 'react';

const BlogPost = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-yellow2-resonate p-8 shadow-md rounded-lg m-4 w-[600px]">
      <img src={imageUrl} alt="Blog Post" className="mb-4 rounded-lg" />
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
    </div>
  );
};

export default BlogPost;