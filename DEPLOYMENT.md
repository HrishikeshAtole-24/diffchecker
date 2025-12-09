# 🌐 DEPLOYMENT GUIDE

Deploy your DiffChecker to the cloud! This guide covers deployment to popular platforms.

## 🎯 Deployment Architecture

```
Frontend (Vercel) ←→ Backend (Railway/Render) ←→ MongoDB Atlas
```

---

## 📦 1. Deploy Database (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a new cluster (free tier)

### Step 2: Setup Database
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password
5. Replace `<dbname>` with `diffchecker`

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/diffchecker?retryWrites=true&w=majority
```

---

## 🚀 2. Deploy Backend (Railway)

### Option A: Railway (Recommended)

1. **Create Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your repository
   - Select `backend` folder

3. **Configure Environment Variables**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   ```

4. **Deploy Settings**
   - Root Directory: `/backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

5. **Get Your Backend URL**
   - Railway will give you a URL like: `https://your-app.railway.app`

### Option B: Render

1. **Create Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   - Name: `diffchecker-api`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Environment Variables**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete

---

## 🎨 3. Deploy Frontend (Vercel)

### Step 1: Prepare for Deployment

Create `frontend/.env.production`:
```env
NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI (Optional)**
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Dashboard**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Select `frontend` folder

3. **Configure Build Settings**
   - Framework Preset: `Next.js`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Environment Variables**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Get your URL: `https://your-app.vercel.app`

### Step 3: Update Backend CORS

Go back to Railway/Render and update the `FRONTEND_URL`:
```
FRONTEND_URL=https://your-app.vercel.app
```

---

## ✅ 4. Verify Deployment

### Test Checklist

- [ ] Frontend loads at your Vercel URL
- [ ] Backend health check works: `https://your-backend.railway.app/health`
- [ ] Can compare text without saving
- [ ] Can save comparison and get shareable link
- [ ] Shareable links work
- [ ] No CORS errors in browser console

### Test Commands

```bash
# Test backend health
curl https://your-backend.railway.app/health

# Test compare API
curl -X POST https://your-backend.railway.app/api/diff \
  -H "Content-Type: application/json" \
  -d '{"leftText":"Hello","rightText":"World","mode":"lines"}'
```

---

## 🔧 5. Custom Domain (Optional)

### Vercel Custom Domain

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Railway Custom Domain

1. Go to your Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records

---

## 📊 6. Monitoring & Analytics

### Backend Monitoring
- Railway/Render provides built-in logs
- Check deployment logs for errors
- Monitor response times

### Frontend Analytics
- Vercel provides analytics dashboard
- Track page views and performance
- Monitor Core Web Vitals

---

## 🚨 Common Issues

### Issue: CORS Error
**Problem:** Frontend can't communicate with backend
**Solution:**
1. Check `FRONTEND_URL` in backend environment variables
2. Make sure it matches your Vercel URL exactly
3. Redeploy backend after changing

### Issue: MongoDB Connection Timeout
**Problem:** Backend can't connect to MongoDB Atlas
**Solution:**
1. Check MongoDB Atlas IP whitelist
2. Add `0.0.0.0/0` to allow all IPs (or your backend IP)
3. Verify connection string is correct

### Issue: Environment Variables Not Working
**Problem:** API calls fail after deployment
**Solution:**
1. Verify all environment variables are set
2. Restart services after adding variables
3. Check variable names match exactly

---

## 💰 Cost Estimate

| Service | Free Tier | Paid Plan |
|---------|-----------|-----------|
| MongoDB Atlas | 512 MB storage | $9/month (2GB) |
| Railway | $5 free credit/month | $5/month usage-based |
| Vercel | 100 GB bandwidth | $20/month (Pro) |

**Total:** FREE for small projects! 🎉

---

## 🎉 Deployment Complete!

Your DiffChecker is now live on the internet! 🚀

Share your links:
- Frontend: `https://your-app.vercel.app`
- API: `https://your-backend.railway.app`

---

## 📈 Next Steps

1. **Performance Optimization**
   - Enable caching
   - Optimize images
   - Use CDN for static assets

2. **Security**
   - Add rate limiting
   - Implement authentication
   - Use HTTPS everywhere

3. **Monitoring**
   - Set up error tracking (Sentry)
   - Add analytics (Google Analytics)
   - Monitor uptime (UptimeRobot)

4. **Scaling**
   - Upgrade MongoDB cluster
   - Add Redis caching
   - Use load balancing

---

**Happy Deploying! 🔥**
