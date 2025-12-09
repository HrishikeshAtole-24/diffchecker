# 🎮 COMMON COMMANDS CHEAT SHEET

Quick reference for all commands you'll need!

## 🚀 Getting Started

### Install Everything
```bash
# From root directory
npm run install-all

# OR manually:
cd backend && npm install
cd ../frontend && npm install
```

### Setup Environment Files
```bash
# From root directory
npm run setup-env

# OR manually:
cd backend && copy .env.example .env
cd ../frontend && copy .env.local.example .env.local
```

---

## 🔧 Backend Commands

### Start Development Server
```bash
cd backend
npm run dev
```

### Start Production Server
```bash
cd backend
npm start
```

### Install New Package
```bash
cd backend
npm install package-name
```

---

## 🎨 Frontend Commands

### Start Development Server
```bash
cd frontend
npm run dev
```

### Build for Production
```bash
cd frontend
npm run build
```

### Start Production Server
```bash
cd frontend
npm start
```

### Run Linter
```bash
cd frontend
npm run lint
```

### Install New Package
```bash
cd frontend
npm install package-name
```

---

## 🗄️ MongoDB Commands

### Start MongoDB (Local)
```bash
# Windows
mongod

# Mac/Linux
sudo mongod
```

### Connect to MongoDB Shell
```bash
mongo
```

### MongoDB Shell Commands
```js
// Show databases
show dbs

// Use database
use diffchecker

// Show collections
show collections

// Find all comparisons
db.comparisons.find().pretty()

// Count comparisons
db.comparisons.count()

// Delete all comparisons
db.comparisons.deleteMany({})

// Find by shareId
db.comparisons.findOne({shareId: "your-id"})

// Exit
exit
```

---

## 🧪 Testing Commands

### Test Backend Health
```bash
curl http://localhost:5000/health
```

### Test Backend API
```bash
# Compare endpoint
curl -X POST http://localhost:5000/api/diff ^
  -H "Content-Type: application/json" ^
  -d "{\"leftText\":\"Hello\",\"rightText\":\"World\",\"mode\":\"lines\"}"

# Save endpoint
curl -X POST http://localhost:5000/api/save ^
  -H "Content-Type: application/json" ^
  -d "{\"leftText\":\"Test\",\"rightText\":\"Test2\",\"title\":\"My Test\"}"

# Get saved comparison
curl http://localhost:5000/api/view/YOUR_SHARE_ID
```

### Check Frontend
```bash
# Open in browser
start http://localhost:3000
```

---

## 📦 Root Commands (From package.json)

### Install All Dependencies
```bash
npm run install-all
```

### Start Backend
```bash
npm run backend
```

### Start Frontend
```bash
npm run frontend
```

### Production Backend
```bash
npm run backend-prod
```

### Production Frontend
```bash
npm run frontend-prod
```

---

## 🔍 Debugging Commands

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### Check MongoDB Version
```bash
mongod --version
```

### List Running Processes on Port
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :5000
lsof -i :3000
```

### Kill Process on Port
```bash
# Windows (get PID from netstat above)
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

---

## 🧹 Cleanup Commands

### Remove node_modules
```bash
# Backend
cd backend
rmdir /s /q node_modules

# Frontend
cd frontend
rmdir /s /q node_modules
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall Everything
```bash
cd backend
rmdir /s /q node_modules
npm install

cd ../frontend
rmdir /s /q node_modules
npm install
```

---

## 🔄 Git Commands

### Initialize Repository
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Initial commit"
```

### Create GitHub Repository
```bash
git remote add origin https://github.com/yourusername/diffchecker.git
git branch -M main
git push -u origin main
```

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

---

## 📊 Monitoring Commands

### View Backend Logs
```bash
# The terminal where you ran npm run dev
# All logs appear here
```

### View Frontend Logs
```bash
# The terminal where you ran npm run dev
# All logs appear here
```

### View MongoDB Logs
```bash
# Check mongod terminal
# OR in MongoDB shell:
mongo
use admin
db.adminCommand({ getLog: "global" })
```

---

## 🚀 Deployment Commands

### Build Frontend for Production
```bash
cd frontend
npm run build
```

### Test Production Build Locally
```bash
cd frontend
npm run build
npm start
```

### Vercel Deployment
```bash
cd frontend
npx vercel
```

### Railway Deployment
```bash
# Push to GitHub
git push

# Railway deploys automatically
```

---

## 🔧 Environment Commands

### View Environment Variables (Backend)
```bash
cd backend
type .env
```

### View Environment Variables (Frontend)
```bash
cd frontend
type .env.local
```

### Edit Environment File
```bash
# Backend
cd backend
notepad .env

# Frontend
cd frontend
notepad .env.local
```

---

## 📝 Quick Fixes

### Reset Everything
```bash
# Stop all servers (Ctrl+C in terminals)
cd backend
rmdir /s /q node_modules
del package-lock.json
npm install

cd ../frontend
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Fix Port Conflict
```bash
# Change backend port in backend/.env
PORT=5001

# Update frontend API URL in frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

### Reset Database
```bash
mongo
use diffchecker
db.comparisons.deleteMany({})
exit
```

---

## 🎯 Common Workflows

### Starting Development
```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev

# Terminal 3 (if needed)
mongod
```

### Making Changes
```bash
# 1. Make code changes
# 2. Servers auto-reload
# 3. Test in browser
# 4. Commit changes
git add .
git commit -m "Your message"
```

### Deploying Updates
```bash
# 1. Build and test locally
cd frontend
npm run build
npm start

# 2. Commit and push
git add .
git commit -m "Update"
git push

# 3. Deployment platforms auto-deploy
```

---

## 💡 Pro Tips

### Run Multiple Commands at Once
```bash
# Use && to chain commands
cd backend && npm install && npm run dev
```

### Background Processes
```bash
# Windows - Start in new window
start cmd /k "cd backend && npm run dev"
start cmd /k "cd frontend && npm run dev"
```

### Quick Restart
```bash
# In terminal: Ctrl+C then up arrow then Enter
# Repeats last command
```

---

## 📚 Package Manager Commands

### npm
```bash
npm install package-name       # Install package
npm install package-name --save-dev  # Dev dependency
npm uninstall package-name     # Remove package
npm update                     # Update all packages
npm outdated                   # Check outdated packages
npm list                       # List installed packages
```

---

## 🎉 Quick Reference Card

**Start Everything:**
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend  
cd frontend && npm run dev

# Terminal 3: MongoDB (if local)
mongod
```

**Stop Everything:**
```
Ctrl + C in each terminal
```

**Test:**
```
http://localhost:3000
```

**Common Issues:**
- Port in use: Change PORT in .env
- MongoDB error: Start mongod
- Module error: npm install

---

**Save this file for quick reference! 📌**
