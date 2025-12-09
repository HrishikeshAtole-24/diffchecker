# 🔥 DiffChecker Backend API

Modern text comparison API built with Node.js, Express.js, and MongoDB.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/diffchecker
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Run Server
```bash
# Development with auto-reload
npm run dev

# Production
npm start
```

## 📡 API Endpoints

### Compare Text (No Save)
```http
POST /api/diff
Content-Type: application/json

{
  "leftText": "Hello World",
  "rightText": "Hello Bro",
  "mode": "lines" // or "words" or "chars"
}
```

### Save Comparison
```http
POST /api/save
Content-Type: application/json

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

## 🗄️ Database

- **MongoDB** with Mongoose
- Auto-expires saved comparisons after 30 days
- Indexed by `shareId` for fast retrieval

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- jsdiff (text comparison library)
- nanoid (unique ID generation)
