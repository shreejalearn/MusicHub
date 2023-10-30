import React from 'react';
import BlogPost from './BlogPost';

const Blog = ({ posts }) => {
  return (
    <div className="bg-green-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center flex-col mt-[5%]">
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap justify-center">
          {posts.map((post, index) => (
            <BlogPost
              id={index}
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
//