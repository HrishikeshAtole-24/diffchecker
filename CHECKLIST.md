# ✅ SETUP CHECKLIST

Follow this checklist to ensure everything is set up correctly!

## 📋 Pre-Setup Checklist

- [ ] Node.js installed (v18+) - Check: `node --version`
- [ ] npm installed - Check: `npm --version`
- [ ] MongoDB installed OR MongoDB Atlas account created
- [ ] Git installed (optional) - Check: `git --version`

---

## 🔧 Backend Setup Checklist

- [ ] Navigate to backend folder: `cd backend`
- [ ] Install dependencies: `npm install`
- [ ] Create `.env` file: `copy .env.example .env`
- [ ] Edit `.env` with MongoDB URI
- [ ] Start MongoDB (if local): `mongod`
- [ ] Start backend: `npm run dev`
- [ ] Verify: Backend running on http://localhost:5000
- [ ] Test: Visit http://localhost:5000/health (should show OK)

---

## 🎨 Frontend Setup Checklist

- [ ] Navigate to frontend folder: `cd frontend`
- [ ] Install dependencies: `npm install`
- [ ] Create `.env.local` file: `copy .env.local.example .env.local`
- [ ] Verify `.env.local` has correct API URL
- [ ] Start frontend: `npm run dev`
- [ ] Verify: Frontend running on http://localhost:3000
- [ ] Test: Open http://localhost:3000 in browser

---

## 🧪 Testing Checklist

### Basic Functionality
- [ ] Both editors load correctly
- [ ] Can type in left editor
- [ ] Can type in right editor
- [ ] Mode selector works (lines/words/chars)
- [ ] Compare button works
- [ ] Diff results display correctly
- [ ] Green highlights for additions
- [ ] Red highlights for deletions
- [ ] Statistics show (added/removed/unchanged)

### Save Functionality
- [ ] "Save & Share" button opens modal
- [ ] Can enter title
- [ ] Can select language
- [ ] "Save & Get Link" button works
- [ ] Share link is generated
- [ ] Can copy link
- [ ] Opening link shows saved comparison
- [ ] Saved comparison displays correctly

### UI/UX
- [ ] Navbar displays correctly
- [ ] Gradient text looks good
- [ ] Animations are smooth
- [ ] Toast notifications appear
- [ ] Buttons have hover effects
- [ ] Layout is responsive (test on mobile)
- [ ] Modal opens/closes properly
- [ ] Clear All button works

---

## 🔍 Verification Commands

### Check Node.js
```bash
node --version
# Should show: v18.x.x or higher
```

### Check npm
```bash
npm --version
# Should show: 9.x.x or higher
```

### Check MongoDB (if local)
```bash
mongod --version
# Should show MongoDB version
```

### Test Backend API
```bash
curl http://localhost:5000/health
# Should return: {"status":"OK","message":"🔥 DiffChecker API is running!"}
```

### Check Backend Logs
Look for these in terminal:
```
✅ MongoDB Connected: localhost
🚀 DiffChecker API Server Running
📍 http://localhost:5000
```

### Check Frontend Logs
Look for these in terminal:
```
✓ Ready in Xms
○ Local: http://localhost:3000
```

---

## 🐛 Troubleshooting Checklist

### If Backend Won't Start
- [ ] MongoDB is running (check with `mongo` command)
- [ ] Port 5000 is not in use
- [ ] .env file exists and has correct URI
- [ ] All dependencies installed (`npm install`)
- [ ] Node.js version is 18+

### If Frontend Won't Start
- [ ] Backend is running first
- [ ] Port 3000 is not in use
- [ ] .env.local file exists
- [ ] All dependencies installed (`npm install`)
- [ ] No syntax errors in code

### If Comparison Doesn't Work
- [ ] Backend is running
- [ ] Frontend .env.local has correct API URL
- [ ] No CORS errors in browser console
- [ ] Both texts are entered
- [ ] Network tab shows API call succeeds

### If Save Doesn't Work
- [ ] MongoDB is connected
- [ ] Check backend terminal for errors
- [ ] Check browser console for errors
- [ ] Database name is correct in .env

---

## 📊 Health Check Results

Run these and check all pass:

### ✅ Backend Health
```bash
curl http://localhost:5000/health
```
**Expected**: `{"status":"OK",...}`

### ✅ Backend Diff API
```bash
curl -X POST http://localhost:5000/api/diff -H "Content-Type: application/json" -d "{\"leftText\":\"test\",\"rightText\":\"test2\",\"mode\":\"lines\"}"
```
**Expected**: JSON with diff array

### ✅ Frontend Loading
Open: http://localhost:3000
**Expected**: DiffChecker homepage loads

### ✅ MongoDB Connection
Check backend terminal logs
**Expected**: "MongoDB Connected"

---

## 🎯 Feature Testing Checklist

### Test 1: Simple Text Comparison
- [ ] Left: `Hello World`
- [ ] Right: `Hello Bro`
- [ ] Click Compare
- [ ] See "World" in red, "Bro" in green

### Test 2: Multi-line Comparison
- [ ] Left: `Line 1\nLine 2\nLine 3`
- [ ] Right: `Line 1\nLine 2 Modified\nLine 3`
- [ ] Click Compare
- [ ] See line 2 differences

### Test 3: Mode Switching
- [ ] Enter same text in both
- [ ] Try Lines mode
- [ ] Try Words mode
- [ ] Try Chars mode
- [ ] Each mode shows correctly

### Test 4: Save and Retrieve
- [ ] Enter text
- [ ] Click Save & Share
- [ ] Enter title "Test"
- [ ] Save
- [ ] Copy link
- [ ] Open link in new tab
- [ ] See saved comparison

### Test 5: Clear Functionality
- [ ] Enter text in both
- [ ] Click Clear All
- [ ] Both editors empty
- [ ] Diff result disappears

---

## 🚀 Ready for Production Checklist

Before deploying:
- [ ] All tests pass
- [ ] No console errors
- [ ] No terminal errors
- [ ] Environment files configured
- [ ] Git repository initialized
- [ ] Code committed
- [ ] MongoDB Atlas ready (for production)
- [ ] Deployment docs read (DEPLOYMENT.md)

---

## 📝 Notes Section

Use this space to track your setup:

**Date Started**: _______________

**MongoDB Type**: 
- [ ] Local
- [ ] MongoDB Atlas

**MongoDB URI**: _______________

**Issues Encountered**:
1. _______________
2. _______________

**Solutions Applied**:
1. _______________
2. _______________

**Custom Changes Made**:
1. _______________
2. _______________

**Deployment Date**: _______________

**Production URL**: _______________

---

## ✅ Final Verification

All checks passed?
- [ ] Backend runs ✅
- [ ] Frontend runs ✅
- [ ] MongoDB connected ✅
- [ ] Comparison works ✅
- [ ] Save works ✅
- [ ] UI looks good ✅
- [ ] No errors ✅

## 🎉 YOU'RE DONE!

If all boxes are checked, your DiffChecker is ready to use!

**Next Steps**:
1. Customize the design
2. Add your own features
3. Deploy to production
4. Share with the world!

**Happy Coding! 🔥**
