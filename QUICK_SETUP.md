# 🚀 Quick Setup Guide

Get your portfolio website live in 10 minutes!

## Step 1: Customize Your Content (5 minutes)

1. **Edit `index.html`**:
   - Replace all instances of "Your Name" with your actual name
   - Update the hero section with your title/role
   - Add your real photo (replace placeholder image)
   - Update experience, education, and projects with your information

2. **Update Contact Information**:
   - Add your real email addresses
   - Update social media links in the footer
   - Add your actual projects and certifications

## Step 2: Deploy to GitHub Pages (3 minutes)

1. **Create GitHub Repository**:
   ```bash
   # Create a new repository on GitHub named: yourusername.github.io
   ```

2. **Upload Files**:
   - Upload `index.html`, `styles.css`, and `script.js` to your repository
   - You can skip `google-apps-script.js` for now (we'll set up the contact form later)

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Save

**Your site will be live at: `https://yourusername.github.io`**

## Step 3: Set Up Contact Form (2 minutes)

### Option A: Simple EmailJS (Recommended for quick setup)

1. **Sign up at [emailjs.com](https://emailjs.com)** (free)
2. **Create Email Service**:
   - Add your Gmail account
   - Get your Service ID
3. **Create Email Template**:
   - Template: "New Contact Form Submission"
   - Variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
4. **Update `script.js`**:
   ```javascript
   // Replace these values:
   emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
   'YOUR_EMAILJS_SERVICE_ID'
   'YOUR_EMAILJS_TEMPLATE_ID'
   ```

### Option B: Google Sheets (More advanced)

1. **Create Google Sheet** at [sheets.google.com](https://sheets.google.com)
2. **Set up Google Apps Script**:
   - Go to [script.google.com](https://script.google.com)
   - Create new project
   - Copy code from `google-apps-script.js`
   - Replace `YOUR_SPREADSHEET_ID` with your sheet ID
   - Deploy as web app
3. **Update `script.js`**:
   ```javascript
   // Replace with your web app URL:
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```

## Step 4: Custom Domain (Optional)

1. **Purchase domain** from Namecheap ($10-12/year)
2. **Configure DNS**:
   - Add CNAME record: `yourusername.github.io`
3. **Update GitHub Pages**:
   - Go to repository Settings → Pages
   - Add your custom domain

## 🎉 You're Done!

Your portfolio is now live with:
- ✅ Professional design
- ✅ Mobile responsive
- ✅ Contact form working
- ✅ Free hosting
- ✅ Custom domain (optional)

## 🔧 Quick Customization Tips

### Change Colors
Edit `styles.css`:
```css
:root {
    --primary-color: #your-color; /* Change this */
}
```

### Add Your Photo
Replace this line in `index.html`:
```html
<img src="your-photo-url.jpg" alt="Your Photo" class="img-fluid rounded-circle mb-4">
```

### Update Projects
Edit the project cards in `index.html`:
```html
<div class="card project-card">
    <img src="your-project-image.jpg" class="card-img-top" alt="Project Name">
    <div class="card-body">
        <h5 class="card-title">Your Project Name</h5>
        <p class="card-text">Your project description</p>
        <!-- Add your badges and links -->
    </div>
</div>
```

## 🚨 Common Issues

**Contact form not working?**
- Check EmailJS configuration
- Verify service is active
- Test in EmailJS dashboard

**Styling looks wrong?**
- Clear browser cache
- Check CSS file is loading
- Verify Bootstrap CDN

**Site not loading?**
- Check GitHub Pages is enabled
- Verify repository name is correct
- Wait 5-10 minutes for deployment

## 📞 Need Help?

1. Check the main README.md for detailed instructions
2. Use browser developer tools (F12) to debug
3. Test each component individually

---

**Your professional portfolio is ready to impress! 🎯** 