# 🚀 AI Website Builder

Build websites from simple text prompts using AI. Generate code, preview websites live, edit files, save projects, and export your work.

## ✨ Features

- 🤖 AI-powered website generation
- 💬 Edit websites using prompts
- 👨‍💻 Manually edit source code
- 👀 Live website preview
- 🔐 User login and registration
- 💾 Save and manage projects
- 🌐 Publish websites
- 📦 Export projects as ZIP files

## 🛠️ Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Sandpack  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**AI:** OpenRouter API  
**Authentication:** JWT and cookies  
**Tools:** Axios, React Router, JSZip, Git

## 📁 Project Structure

```text
AI-website-builder/
├── client/     # Frontend
├── server/     # Backend
└── README.md
```

## ⚙️ How to Setup & Run This Project

### Requirements

- Node.js and npm
- MongoDB database
- OpenRouter API key
- Git

### 1. Install Node.js

Download Node.js from the official website:

https://nodejs.org/en/download/

Install it if you haven't already.

### 2. Clone the Repository

```bash
git clone https://github.com/Nihal-pratap-singh/AI-website-builder.git
cd AI-website-builder
```

### 3. Setup the Backend (Server)

**Step 1:** Open the project in VS Code and open the terminal.

**Step 2:** Go to the server folder.

```bash
cd server
npm install
```

**Step 3:** Create a `.env` file inside the `server` folder:

```env
JWT_SECRET=your_random_secret
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_MODEL=
ORIGINS=
NODE_ENV=development
```



**Step 4:** Start the backend.

```bash
npm run dev
```

Keep this terminal running. If `npm run dev` is not defined in your server's `package.json`, use the script provided there.

### 4. Setup the Frontend (Client)

Open a **new terminal** in VS Code.

**Step 1:** Go to the client folder from the project root.

```bash
cd client
npm install
npm run dev

```

**Step 2:** If your frontend API configuration uses `VITE_BASE_URL`, create a `.env` file inside `client`:

```env
VITE_BASE_URL=http://localhost:3000
```

If your `client/src/api/api.js` uses a different environment variable, use that existing variable name instead.

**Step 3:** Start the frontend.

```bash
npm run dev
```



## 👨‍💻 Author

**Nihal Singh**

- GitHub: https://github.com/Nihal-pratap-singh





Ai-website-builder
