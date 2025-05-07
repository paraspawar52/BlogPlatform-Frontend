import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get('https://blog-platform-backend-8vnc.onrender.com/api/all');
    setBlogs(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://blog-platform-backend-8vnc.onrender.com/api/${id}`);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">📝 All Blogs</h1>
          <Link
            to="/create"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow transition duration-300"
          >
            + Create Blog
          </Link>
        </div>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">No blogs available.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">{blog.title}</h2>
                <p className="text-sm text-gray-500 mb-4">✍️ {blog.author}</p>
                <div className="flex gap-3">
                  <Link
                    to={`/post/${blog._id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${blog._id}`}
                    className="text-yellow-600 hover:underline font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:underline font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
