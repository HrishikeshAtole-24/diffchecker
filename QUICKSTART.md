# ⚡ QUICK START GUIDE

Get your DiffChecker running in **5 minutes**! 🔥

## 🎯 Super Fast Setup

### Option 1: Manual Setup (Recommended for Beginners)

**Step 1: Install Backend Dependencies**
```bash
cd backend
npm install
```

**Step 2: Setup Backend Environment**
```bash
copy .env.example .env
```

Edit `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/diffchecker
```

**Step 3: Start Backend** (Keep this terminal open)
```bash
npm run dev
```

**Step 4: Install Frontend Dependencies** (New terminal)
```bash
cd frontend
npm install
```

**Step 5: Setup Frontend Environment**
```bash
copy .env.local.example .env.local
```

**Step 6: Start Frontend** (Same terminal)
```bash
npm run dev
```

**Step 7: Open Browser**
```
http://localhost:3000
```

**Done! 🎉**

---

### Option 2: Using Root Scripts (For Experienced Users)

**From the root `diffchecker` folder:**

```bash
# Install all dependencies at once
npm run install-all

# Setup environment files
npm run setup-env

# Edit the .env files with your settings
# backend/.env and frontend/.env.local

# Start backend (Terminal 1)
npm run backend

# Start frontend (Terminal 2)
npm run frontend
```

**Done! 🎉**

---

## 🚀 First Test

1. Open http://localhost:3000
2. **Left Editor**: Type `Hello World`
3. **Right Editor**: Type `Hello Bro`
4. Click **"Compare Now"** 🔥
5. See the magic! ✨

---

## 💾 Test Save Feature

1. Enter text in both editors
2. Click **"Save & Share"**
3. Enter a title: `My First Diff`
4. Click **"Save & Get Link"**
5. Copy the link
6. Open in a new tab
7. Your comparison is saved! 🎉

---

## 🔥 Features to Try

### 1. **Comparison Modes**
Switch between:
- **Lines** - Compare line by line
- **Words** - Compare word by word
- **Chars** - Compare character by character

### 2. **Monaco Editor**
- Line numbers
- Syntax highlighting
- Word wrap
- Copy/Paste support

### 3. **Beautiful UI**
- Smooth animations
- Gradient effects
- Glass morphism
- Responsive design

---

## 📱 Screens

### Home Page
- Dual Monaco editors
- Mode selector (lines/words/chars)
- Compare, Save, Clear buttons
- Diff result display

### Saved Comparison Page
- Read-only view
- Share link button
- Creation date
- Back to home

---

## 🎨 Customization Quick Tips

### Change Primary Color
`frontend/tailwind.config.js`:
```js
colors: {
  primary: '#6366f1', // Change this!
}
```

### Change Default Text
`frontend/app/page.js`:
```js
const [leftText, setLeftText] = useState('Your default text here')
```

### Change Expiry Time
`backend/src/models/comparisonModel.js`:
```js
expires: 2592000 // 30 days in seconds
```

---

## ⚙️ Using MongoDB Atlas (Cloud)

If you don't have MongoDB installed locally:

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for FREE
3. Create a cluster
4. Get connection string
5. Update `backend/.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/diffchecker
```

---

## 🐛 Quick Troubleshooting

### Backend won't start
```bash
# Make sure MongoDB is running
mongod

# OR use MongoDB Atlas connection string
```

### Frontend can't connect to backend
```bash
# Check backend is running on port 5000
# Check frontend/.env.local has correct API URL
```

### Monaco editor not loading
```bash
cd frontend
npm install @monaco-editor/react
```

---

## 📚 Next Steps

- ✅ Read `README.md` for full documentation
- ✅ Check `SETUP.md` for detailed setup
- ✅ See `DEPLOYMENT.md` to go live
- ✅ View `PROJECT_STRUCTURE.md` to understand the code

---

## 🎯 Development Tips

### Hot Reload
Both frontend and backend have hot reload enabled:
- Save a file
- Changes appear automatically
- No need to restart servers

### Check Backend API
```bash
# Test health endpoint
curl http://localhost:5000/health

# Should return: {"status":"OK","message":"🔥 DiffChecker API is running!"}
```

### View MongoDB Data
```bash
# Connect to MongoDB
mongo

# Use database
use diffchecker

# View comparisons
db.comparisons.find().pretty()
```

---

## 🚀 Production Build

When ready to test production builds:

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

---

## 💡 Pro Tips

1. **Use Different Terminals**: One for backend, one for frontend
2. **Keep MongoDB Running**: Don't close the mongod terminal
3. **Check Browser Console**: For any frontend errors
4. **Check Terminal Output**: For backend errors
5. **Save Often**: Use Git to track your changes

---

## 🎉 You're Ready!

Your DiffChecker is now running locally! 

**What you can do:**
- ✅ Compare any text or code
- ✅ Save and share comparisons
- ✅ Customize the design
- ✅ Add new features
- ✅ Deploy to production

**Share your creation:**
- Deploy to Vercel + Railway (see DEPLOYMENT.md)
- Add to your portfolio
- Share with friends
- Make it better!

---

**Happy Hacking! 🔥**

Need help? Check the other documentation files or the code comments.
