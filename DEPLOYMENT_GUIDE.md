# Deployment Guide: DiffChecker

This guide covers deploying your DiffChecker application with:
- **Backend** on Render
- **Frontend** on Vercel

## Prerequisites

- GitHub account with your code pushed to a repository
- MongoDB Atlas account (for cloud database)
- Render account
- Vercel account

---

## Part 1: Set Up MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user (save username and password)
4. Whitelist all IP addresses (0.0.0.0/0) for Network Access
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/diffchecker`)

---

## Part 2: Deploy Backend to Render

### Step 1: Prepare Your Backend

Make sure your backend has:
- ✅ `package.json` with `"start": "node src/server.js"`
- ✅ Node version specified (add to package.json if missing)

### Step 2: Deploy on Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository

3. **Configure the Service**
   - **Name**: `diffchecker-backend` (or your choice)
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

4. **Add Environment Variables**
   Click "Advanced" → "Add Environment Variable":
   
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/diffchecker
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Your backend URL will be: `https://diffchecker-backend.onrender.com`

### Step 3: Important Notes

- Free tier goes to sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- Save your backend URL for frontend configuration

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Prepare Your Frontend

Your frontend should already have:
- ✅ `package.json` with build scripts
- ✅ `next.config.js` configured

### Step 2: Deploy on Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select your repository

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
   ```
   
   Replace `your-backend.onrender.com` with your actual Render backend URL

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment (2-5 minutes)
   - Your frontend URL will be: `https://your-project.vercel.app`

### Step 3: Update Backend CORS

After deployment, update your backend's `FRONTEND_URL` environment variable in Render:

1. Go to Render Dashboard → Your Web Service
2. Environment → Edit `FRONTEND_URL`
3. Set it to: `https://your-project.vercel.app`
4. Save changes (this will redeploy)

---

## Part 4: Verify Deployment

### Test Backend
```bash
curl https://your-backend.onrender.com/api/health
```

### Test Frontend
1. Open your Vercel URL in browser
2. Try comparing two texts
3. Try saving a comparison
4. Check if all features work

---

## Common Issues & Solutions

### Issue: CORS Errors
**Solution**: Make sure `FRONTEND_URL` in Render matches your Vercel URL exactly (with https://, no trailing slash)

### Issue: Backend times out
**Solution**: Free tier on Render sleeps. First request takes ~30 seconds. Consider upgrading or keeping it warm with a cron job.

### Issue: MongoDB connection fails
**Solution**: 
- Check MongoDB Atlas whitelist (should be 0.0.0.0/0)
- Verify connection string is correct
- Ensure password has no special characters or URL-encode them

### Issue: Build fails on Vercel
**Solution**: 
- Check build logs for errors
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Issue: Environment variables not working
**Solution**: 
- Frontend: Must start with `NEXT_PUBLIC_`
- Redeploy after changing environment variables
- Clear build cache if needed

---

## Continuous Deployment

Both Render and Vercel support automatic deployments:

- **Push to GitHub** → Automatic deployment on both platforms
- **Pull Requests** → Vercel creates preview deployments
- **Rollback** → Both platforms allow instant rollbacks

---

## Monitoring & Logs

### Render Logs
- Dashboard → Your Service → Logs tab
- View real-time logs and errors

### Vercel Logs
- Dashboard → Your Project → Deployments → View Function Logs
- Check build logs and runtime logs

---

## Cost Optimization

### Free Tier Limits

**Render Free Tier:**
- 750 hours/month
- Sleeps after 15 min inactivity
- 512 MB RAM

**Vercel Free Tier:**
- 100 GB bandwidth/month
- Unlimited deployments
- Serverless functions

### Tips
- Use a single MongoDB Atlas free cluster
- Monitor bandwidth usage on Vercel
- Consider paid plans as traffic grows

---

## Next Steps

1. ✅ Set up custom domain (optional)
2. ✅ Enable HTTPS (automatic on both platforms)
3. ✅ Set up monitoring/alerts
4. ✅ Configure backup strategy for MongoDB
5. ✅ Add analytics to track usage

---

## Support Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/

---

## Quick Reference

| Service | Platform | URL Pattern |
|---------|----------|-------------|
| Backend | Render | `https://[name].onrender.com` |
| Frontend | Vercel | `https://[name].vercel.app` |
| Database | MongoDB Atlas | `mongodb+srv://...` |

---

**Need Help?** Check the logs first! 90% of deployment issues are visible in the logs.
