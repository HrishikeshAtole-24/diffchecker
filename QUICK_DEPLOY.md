# Quick Deploy Checklist

## Before You Start
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas account created
- [ ] Database connection string ready

---

## Backend (Render) - 5 Minutes

1. **Create MongoDB Atlas Database**
   - Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/diffchecker`

2. **Deploy on Render**
   - Go to https://dashboard.render.com/
   - New → Web Service
   - Connect GitHub repo
   - Root Directory: `backend`
   - Build: `npm install`
   - Start: `npm start`

3. **Environment Variables**
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   NODE_ENV=production
   FRONTEND_URL=https://your-app.vercel.app
   ```

4. **Save Your Backend URL**: `https://_____.onrender.com`

---

## Frontend (Vercel) - 3 Minutes

1. **Deploy on Vercel**
   - Go to https://vercel.com/dashboard
   - New Project
   - Import GitHub repo
   - Root Directory: `frontend`

2. **Environment Variables**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
   ```

3. **Save Your Frontend URL**: `https://_____.vercel.app`

---

## Final Step

Update Render backend's `FRONTEND_URL` to your actual Vercel URL:
- Render Dashboard → Environment → Edit `FRONTEND_URL`
- Set to: `https://your-app.vercel.app`

---

## Test It! 🚀

1. Open your Vercel URL
2. Compare two texts
3. Save a comparison
4. Verify it works!

---

## Troubleshooting

**CORS Error?**
→ Check `FRONTEND_URL` in Render matches Vercel URL exactly

**Backend slow on first request?**
→ Normal! Free tier sleeps after 15 minutes. Upgrade to paid tier or keep it warm.

**Can't connect to MongoDB?**
→ Check IP whitelist in Atlas (should be 0.0.0.0/0)

---

**That's it!** Your app is live. 🎉
