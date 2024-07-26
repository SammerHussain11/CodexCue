import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
