---



Blogs Frontend

This is the **React.js** frontend for the blog application. It communicates with the backend APIs to display and manage blog posts.

## 🔧 Setup Instructions

### 1. Navigate to the frontend folder:
```bash
cd Blogs-Frontend
2. Install dependencies:
bash
Copy
Edit
npm install
3. Configure Environment Variables:
Create a .env file in the root of your project:

ini
Copy
Edit
REACT_APP_BACKEND_URL=https://your-backend-service.onrender.com
Replace the value with your actual deployed Render backend URL.

4. Start the frontend server locally:
bash
Copy
Edit
npm start
Frontend will run on: http://localhost:3000

 Features
View list of all blogs

Create a new blog

Edit existing blogs

Delete blogs

View individual blog details

Professional UI with Tailwind CSS

⚙Environment-based API Usage
In your React code, use:

js
Copy
Edit
axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/all`);
This allows easy switching between local and deployed environments.

yaml
Copy
Edit

---











