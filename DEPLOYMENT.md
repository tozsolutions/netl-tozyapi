# Deployment Guide - Toz Yapı Website

This guide will help you deploy the Toz Yapı website to GitHub and Vercel.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Vercel account (free tier is sufficient)
- Node.js 16+ (optional, for local development)

## 🚀 Step 1: Initialize Git Repository

### If you haven't initialized Git yet:

```bash
cd C:\Users\Admin\Desktop\xxx\netl\tozyapi-site
git init
git add .
git commit -m "Initial commit: Toz Yapı website"
```

## 🐙 Step 2: Create GitHub Repository

### Option A: Via GitHub Website

1. Go to https://github.com/new
2. Repository name: `tozyapi-site` (or your preferred name)
3. Choose Public or Private
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

### Option B: Via GitHub CLI

```bash
gh repo create tozyapi-site --public --source=. --remote=origin
```

## 🔗 Step 3: Connect Local Repository to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/tozyapi-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## ▲ Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com/dashboard
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Find and select `tozyapi-site` from your repositories
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Select "Other" or "Vite"
   - Root Directory: `./` (keep default)
   - Build Command: `npm run build` (or leave empty for static site)
   - Output Directory: `dist` (or leave empty for static site)
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (~1-2 minutes)
   - Your site will be live at: `https://tozyapi-site.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

## 🔗 Step 5: Connect Custom Domain (Optional)

### In Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your domain: `tozyapi.com.tr`
4. Follow DNS configuration instructions:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Root Domain:

```
Type: A
Name: @
Value: 76.76.21.21
```

## 🔄 Automatic Deployments

Vercel automatically deploys your site when:

- You push to the `main` branch → Production deployment
- You push to any other branch → Preview deployment
- You create a Pull Request → Preview deployment for review

## 📊 Environment Variables (if needed)

If you need to add environment variables:

1. Go to Vercel Dashboard → Project Settings
2. Navigate to "Environment Variables"
3. Add variables:
   - `NEXT_PUBLIC_API_URL` (if using API)
   - `GOOGLE_ANALYTICS_ID` (for analytics)
   - etc.

## 🔍 Verify Deployment

After deployment, verify:

1. ✅ Homepage loads correctly
2. ✅ All blog pages are accessible
3. ✅ CSS and JS files load properly
4. ✅ Images display correctly
5. ✅ Contact form works (if backend configured)
6. ✅ Mobile responsive design works
7. ✅ Navigation works on all pages

## 🛠️ Troubleshooting

### Issue: Build Fails

**Solution:** Check build logs in Vercel dashboard. Common issues:
- Missing dependencies in package.json
- Incorrect build command
- Path issues in HTML files

### Issue: 404 on Blog Pages

**Solution:** Update `vercel.json` rewrites:
```json
{
  "rewrites": [
    { "source": "/blog/:path*", "destination": "/blog/index.html" }
  ]
}
```

### Issue: CSS/JS Not Loading

**Solution:** Ensure paths are absolute:
```html
<!-- Correct -->
<link rel="stylesheet" href="/assets/css/style.css">

<!-- Incorrect -->
<link rel="stylesheet" href="./assets/css/style.css">
```

### Issue: Images Not Displaying

**Solution:** 
- Check image paths are correct
- Ensure images are in the repository
- Use absolute paths: `/images/photo.jpg`

## 📈 Post-Deployment Optimization

### 1. Enable Analytics

Add Google Analytics to all pages:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 2. Add Sitemap

Create `public/sitemap.xml` and submit to Google Search Console.

### 3. Enable HTTPS

Automatic in Vercel - no action needed.

### 4. Set Up Redirects

In `vercel.json`:
```json
{
  "redirects": [
    { "source": "/old-page", "destination": "/new-page" }
  ]
}
```

## 📱 Social Media Preview

Update Open Graph images for better social sharing:

1. Create preview images (1200x630px)
2. Save to `/images/social-preview.jpg`
3. Update meta tags in all HTML files

## 🎉 Success!

Your website is now live and accessible worldwide!

**Production URL:** `https://tozyapi.com` (or your custom domain)
**Preview URLs:** Generated for each branch/PR

## 📞 Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

Last updated: March 2026
