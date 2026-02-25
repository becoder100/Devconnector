# 🚀 DevConnector

A full-stack MERN social networking platform for developers to create profiles, share posts, and connect with other developers.

🔗 **Live Demo:** https://devconnector-yn6p.onrender.com/  
📦 **Tech Stack:** MongoDB, Express.js, React.js, Node.js  
🔐 **Authentication:** JWT-based authentication  
🌐 **GitHub Integration:** Fetch developer repositories using GitHub API  

---

## 📌 Overview

DevConnector is a developer-focused social networking platform built using the MERN stack. It allows developers to create professional profiles, showcase their skills and experience, share posts, and interact with other developers.

The application is fully deployed in production using Render and MongoDB Atlas with environment-based configuration for secure secret management.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Secure Login with JWT
- Protected Routes
- Password hashing using bcrypt
- Auth middleware for route protection

### 👤 Developer Profiles
- Create & Update Profile
- Add Work Experience
- Add Education
- List Skills
- Add Social Media Links
- Fetch GitHub Repositories dynamically

### 📝 Posts & Interaction
- Create Post
- Delete Own Post
- Like / Unlike Posts
- Comment on Posts
- Delete Own Comments

### 🌍 Production Ready
- Environment-based configuration
- Secure secret management
- Hosted on Render
- MongoDB Atlas cloud database

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- dotenv

### Frontend
- React.js
- Redux Toolkit
- React Router
- Axios
- FontAwesome

### Deployment
- Render (Backend + Frontend)
- MongoDB Atlas

---

## 📂 Project Structure
Devconnector/
│
├── client/ # React Frontend
│ ├── src/
│ ├── public/
│
├── config/
│ └── db.js # MongoDB connection logic
│
├── middleware/ # Authentication middleware
├── models/ # Mongoose schemas
├── routes/api/ # Express API routes
│
├── server.js # Application entry point
├── package.json
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory for local development:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_SECRET=your_github_secret

⚠️ Never commit your `.env` file to GitHub.  
Secrets must be stored in environment variables only.

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/becoder100/Devconnector.git

cd Devconnector

---

### 2️⃣ Install Backend Dependencies
npm install

---

### 3️⃣ Install Frontend Dependencies

cd client
npm install
cd ..

---

### 4️⃣ Run in Development Mode
npm run dev


Backend runs on:
http://localhost:5000


## 🏗️ Build for Production
npm run build
npm start



---

## 📡 API Endpoints Overview

### 🔐 Auth Routes
- `POST /api/users` → Register user
- `POST /api/auth` → Login user
- `GET /api/auth` → Get authenticated user

### 👤 Profile Routes
- `GET /api/profile`
- `POST /api/profile`
- `GET /api/profile/user/:user_id`
- `GET /api/profile/github/:username`

### 📝 Post Routes
- `POST /api/posts`
- `GET /api/posts`
- `PUT /api/posts/like/:id`
- `POST /api/posts/comment/:id`

---

## 🔐 Security Practices

- Environment-based configuration
- No secrets stored in repository
- JWT authentication implemented securely
- Password hashing using bcrypt
- Production environment managed via Render dashboard

---

## 🌐 Deployment

This project is deployed on **Render**.

Deployment Steps:

1. Push project to GitHub
2. Connect GitHub repository to Render
3. Add environment variables in Render dashboard
4. Deploy application

---

## 📈 Future Improvements

- Profile image upload (Cloudinary integration)
- Real-time chat functionality
- Email verification
- Pagination for posts
- UI/UX enhancements
- Dark mode theme

---

## 👨‍💻 Author

**Rohit Kumar**  
B.Tech CSE | Full Stack Developer  
GitHub: https://github.com/becoder100  

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is open-source and available under the MIT License.
