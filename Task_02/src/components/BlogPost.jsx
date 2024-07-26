import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <p>
        <strong>By:</strong> {blog.author} | <strong>Date:</strong> {blog.date}
      </p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
