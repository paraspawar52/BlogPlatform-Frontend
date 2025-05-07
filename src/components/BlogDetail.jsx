import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://blog-platform-backend-8vnc.onrender.com/api/all/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">✍️ By <span className="font-medium">{blog.author}</span></p>
        <div className="prose max-w-none text-gray-700 leading-relaxed">{blog.content}</div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
