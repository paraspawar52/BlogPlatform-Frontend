import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BlogForm = ({ editMode }) => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (editMode && id) {
      axios.get(`https://blog-platform-backend-8vnc.onrender.com/api/all/${id}`).then((res) => {
        setForm(res.data);
      });
    }
  }, [editMode, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await axios.put(`https://blog-platform-backend-8vnc.onrender.com/api/edit/${id}`, form);
    } else {
      await axios.post('https://blog-platform-backend-8vnc.onrender.com/api/add', form);
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {editMode ? '✏️ Edit Blog Post' : '📝 Create New Blog'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Author</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter author's name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Content</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write your blog content here..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              {editMode ? 'Update Blog' : 'Publish Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
