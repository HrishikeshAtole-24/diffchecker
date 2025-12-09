# 🚀 SETUP INSTRUCTIONS

Follow these steps to get your DiffChecker up and running!

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Node.js (v18 or higher)
- ✅ MongoDB installed locally OR MongoDB Atlas account
- ✅ Git (optional)

## 🔧 Step-by-Step Setup

### 1️⃣ Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install all dependencies
npm install

# Create your .env file
copy .env.example .env
```

**Edit the `.env` file** with your settings:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/diffchecker
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**If using MongoDB Atlas:**
- Go to https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string
- Replace `MONGODB_URI` with your Atlas URI

```bash
# Start the backend server
npm run dev
```

✅ Backend should be running on http://localhost:5000

### 2️⃣ Frontend Setup

Open a **NEW terminal** window:

```bash
# Navigate to frontend folder
cd frontend

# Install all dependencies
npm install

# Create your .env.local file
copy .env.local.example .env.local
```

**Edit the `.env.local` file**:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

```bash
# Start the frontend server
npm run dev
```

✅ Frontend should be running on http://localhost:3000

### 3️⃣ Test Your Application

1. Open your browser: http://localhost:3000
2. You should see the beautiful DiffChecker homepage! 🔥
3. Try pasting some text in both editors
4. Click "Compare Now"
5. See the beautiful diff results!
6. Click "Save & Share" to test MongoDB integration

## 🎯 Quick Test

### Test 1: Compare Without Saving
1. Left text: `Hello World`
2. Right text: `Hello Bro`
3. Click "Compare Now"
4. You should see additions/deletions highlighted!

### Test 2: Save & Share
1. Enter some text in both editors
2. Click "Save & Share"
3. Enter a title (optional)
4. Click "Save & Get Link"
5. Copy the shareable link
6. Open in new tab - your comparison is saved! 🎉

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
```
❌ MongoDB Connection Error: connect ECONNREFUSED
```
**Solution:** 
- Make sure MongoDB is running: `mongod`
- Or use MongoDB Atlas connection string

**Port Already in Use:**
```
❌ Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** 
- Change PORT in `.env` to 5001 or another port
- Update frontend `.env.local` with new port

### Frontend Issues

**API Connection Error:**
```
❌ Failed to compare texts
```
**Solution:**
- Make sure backend is running on port 5000
- Check `.env.local` has correct API URL
- Check browser console for CORS errors

**Module Not Found:**
```
❌ Cannot find module '@monaco-editor/react'
```
**Solution:**
```bash
cd frontend
npm install
```

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```js
colors: {
  primary: '#6366f1',    // Change this!
  secondary: '#8b5cf6',  // And this!
}
```

### Change Port
Backend: Edit `backend/.env`
```env
PORT=8000
```

Frontend: Edit `frontend/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 📚 Useful Commands

### Backend
```bash
npm run dev      # Development with auto-reload
npm start        # Production mode
```

### Frontend
```bash
npm run dev      # Development mode
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check for code issues
```

## 🔥 You're All Set!

Your DiffChecker is now running! Here's what you can do:

✅ Compare text, code, JSON, or any content
✅ Switch between lines/words/chars comparison modes
✅ Save comparisons and share links
✅ Beautiful, smooth animations
✅ Professional Monaco editor

## 🚀 Next Steps

1. Customize the design to match your style
2. Deploy to production (Vercel + Railway)
3. Add authentication
4. Implement comparison history
5. Add file upload support

## 💡 Need Help?

- Check the main README.md for detailed documentation
- Check backend/README.md for API documentation
- Check frontend/README.md for frontend documentation

---

**Happy Coding! 🔥**
