# 🔥 DiffChecker - Modern Text Comparison Tool

A beautiful, user-friendly, and powerful text comparison tool built with **Next.js**, **Node.js**, **Express.js**, and **MongoDB**.

## ✨ Features

- 🎨 **Modern & Aesthetic UI** - Gradient designs, smooth animations, glass morphism
- ⚡ **Fast Comparison** - Lines, words, or character-level diff
- 💾 **Save & Share** - Generate shareable links (expires in 30 days)
- 🎯 **Monaco Editor** - Professional VS Code-like editor
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Dark Theme** - Eye-friendly design
- 🔥 **Real-time Stats** - See additions, deletions, and unchanged parts

## 🏗️ Architecture

```
Frontend: Next.js 14 (App Router)
Backend: Node.js + Express.js
Database: MongoDB with Mongoose
Diff Engine: jsdiff library
Styling: Tailwind CSS
Animations: Framer Motion
```

## 📦 Project Structure

```
diffchecker/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── diffController.js
│   │   ├── models/
│   │   │   └── comparisonModel.js
│   │   ├── routes/
│   │   │   └── diffRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── app/
    │   ├── page.js
    │   ├── layout.js
    │   ├── globals.css
    │   └── saved/[id]/
    │       └── page.js
    ├── components/
    │   ├── Navbar.js
    │   ├── Editor.js
    │   ├── DiffResult.js
    │   └── SaveModal.js
    ├── package.json
    └── .env.local.example
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/diffchecker

# Start server
npm run dev
```

Backend runs on: http://localhost:5000

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
copy .env.local.example .env.local

# Start development server
npm run dev
```

Frontend runs on: http://localhost:3000

## 🌐 API Endpoints

### Compare Text (No Save)
```http
POST /api/diff
{
  "leftText": "Hello World",
  "rightText": "Hello Bro",
  "mode": "lines"
}
```

### Save Comparison
```http
POST /api/save
{
  "leftText": "code here",
  "rightText": "modified code",
  "title": "My Comparison",
  "language": "javascript"
}
```

### Get Saved Comparison
```http
GET /api/view/:shareId
```

### Health Check
```http
GET /health
```

## 🎨 Key Features Explained

### 1. **Three Comparison Modes**
   - **Lines**: Compare line by line (default)
   - **Words**: Compare word by word
   - **Chars**: Compare character by character

### 2. **Save & Share**
   - Click "Save & Share" to store comparison
   - Get unique shareable link
   - Automatic expiration after 30 days
   - Optional title and language selection

### 3. **Monaco Editor**
   - Professional code editor
   - Syntax highlighting support
   - Line numbers and word wrap
   - Smooth scrolling

### 4. **Visual Diff Display**
   - ✅ Green highlight for additions
   - ❌ Red highlight for deletions
   - ➖ Gray for unchanged
   - Real-time statistics

## 🎯 Comparison with diffchecker.com

| Feature | Our DiffChecker | diffchecker.com |
|---------|----------------|-----------------|
| UI Design | Modern, aesthetic, gradients | Traditional |
| Comparison Modes | 3 modes (lines/words/chars) | Multiple |
| Save Feature | ✅ Free | ✅ Free |
| Animations | ✅ Smooth Framer Motion | ❌ Basic |
| Monaco Editor | ✅ Yes | ❌ Basic textarea |
| Dark Mode | ✅ Built-in | ✅ Toggle |
| Mobile Friendly | ✅ Fully responsive | ✅ Yes |

## 🔧 Technology Stack

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **jsdiff** - Diff algorithm
- **nanoid** - Unique ID generation

### Frontend
- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Monaco Editor** - Code editor
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Comparison history
- [ ] File upload support
- [ ] PDF/Word comparison
- [ ] Image diff
- [ ] Syntax highlighting for multiple languages
- [ ] Export as PDF
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts

## 🚀 Deployment

### Backend (Railway/Render)
```bash
# Set environment variables
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
NODE_ENV=production
FRONTEND_URL=your_frontend_url
```

### Frontend (Vercel)
```bash
# Set environment variable
NEXT_PUBLIC_API_URL=your_backend_api_url
```

## 📝 License

MIT License - Feel free to use for personal or commercial projects!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

---

Made with 🔥 by Hrishikesh Atole
