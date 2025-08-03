# Quick Deployment Guide

## GitHub Pages Deployment (Recommended - Free)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `your-portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Connect Your Local Repository
Run these commands in your terminal:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/your-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Your Website is Live!
- Your site will be available at: `https://YOUR_USERNAME.github.io/your-portfolio`
- It may take a few minutes to deploy

## Alternative Free Hosting Options

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Deploy settings: Build command: leave empty, Publish directory: leave as is
6. Click "Deploy site"

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

## Custom Domain Setup

### For GitHub Pages:
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In your GitHub repository Settings → Pages
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify/Vercel:
1. Add custom domain in their dashboard
2. Update DNS records as shown

## Next Steps

1. **Customize Content**: Update `index.html` with your information
2. **Set up Contact Form**: Follow the EmailJS setup in `QUICK_SETUP.md`
3. **Add Google Sheets**: Deploy the Apps Script from `google-apps-script.js`
4. **Test Everything**: Make sure contact form works
5. **Add Analytics**: Google Analytics for tracking visitors

## Troubleshooting

- **Site not loading**: Check if repository is public
- **Contact form not working**: Verify EmailJS setup
- **Styling issues**: Check browser console for errors
- **Mobile issues**: Test on different devices

Your portfolio is now ready for deployment! 🚀 