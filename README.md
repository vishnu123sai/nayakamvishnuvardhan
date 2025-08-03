# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a contact form that stores data in Google Sheets and sends email notifications.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Beautiful animations and hover effects
- **Contact Form** - Stores submissions in Google Sheets
- **Email Notifications** - Instant email alerts for new contacts
- **Professional Sections** - Experience, Education, Projects, Certifications
- **SEO Optimized** - Fast loading and search engine friendly
- **Free Hosting** - Multiple free hosting options available

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── google-apps-script.js # Google Apps Script for form handling
└── README.md           # This file
```

## 🚀 Free Hosting Options

### 1. GitHub Pages (Recommended)
- **Cost**: Completely Free
- **Custom Domain**: Yes
- **Setup Time**: 5 minutes

**Steps:**
1. Create a GitHub account
2. Create a new repository named `yourusername.github.io`
3. Upload your files to the repository
4. Enable GitHub Pages in repository settings
5. Your site will be live at `https://yourusername.github.io`

### 2. Netlify
- **Cost**: Free tier available
- **Custom Domain**: Yes
- **Setup Time**: 3 minutes

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Deploy automatically

### 3. Vercel
- **Cost**: Free tier available
- **Custom Domain**: Yes
- **Setup Time**: 3 minutes

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy automatically

### 4. Firebase Hosting
- **Cost**: Free tier available
- **Custom Domain**: Yes
- **Setup Time**: 10 minutes

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## 🔧 Setup Instructions

### Step 1: Customize Content

1. **Edit Personal Information**
   - Open `index.html`
   - Replace "Your Name" with your actual name
   - Update all placeholder content with your information
   - Add your real photo (replace placeholder image)

2. **Update Contact Information**
   - Add your real email addresses
   - Update social media links
   - Add your actual projects and experience

### Step 2: Google Sheets Setup

1. **Create Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new spreadsheet
   - Note the spreadsheet ID from the URL

2. **Set Up Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Create a new project
   - Copy the code from `google-apps-script.js`
   - Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
   - Deploy as web app:
     - Click "Deploy" → "New deployment"
     - Choose "Web app"
     - Set access to "Anyone"
     - Copy the web app URL

3. **Update JavaScript**
   - Open `script.js`
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your web app URL

### Step 3: EmailJS Setup (Optional)

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://emailjs.com)
   - Sign up for free account
   - Create a new email service (Gmail recommended)
   - Create an email template

2. **Update Configuration**
   - In `script.js`, replace:
     - `YOUR_EMAILJS_PUBLIC_KEY` with your public key
     - `YOUR_EMAILJS_SERVICE_ID` with your service ID
     - `YOUR_EMAILJS_TEMPLATE_ID` with your template ID

### Step 4: Custom Domain Setup

1. **Purchase Domain** (Recommended providers):
   - Namecheap ($8-12/year)
   - GoDaddy ($10-15/year)
   - Google Domains ($12/year)

2. **Configure DNS**:
   - Add CNAME record pointing to your hosting provider
   - For GitHub Pages: `yourusername.github.io`
   - For Netlify: `your-site.netlify.app`

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #007bff;    /* Main brand color */
    --secondary-color: #6c757d;  /* Secondary color */
    --success-color: #28a745;    /* Success messages */
    --warning-color: #ffc107;    /* Warning messages */
    --danger-color: #dc3545;     /* Error messages */
}
```

### Fonts
Replace the font family in `styles.css`:
```css
body {
    font-family: 'Your Preferred Font', sans-serif;
}
```

### Animations
Modify animation speeds in `styles.css`:
```css
.hero-image {
    animation: float 6s ease-in-out infinite; /* Change 6s to adjust speed */
}
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🔒 Security Features

- Form validation
- Data sanitization
- CORS handling
- Rate limiting (via hosting provider)

## 📊 Analytics (Optional)

Add Google Analytics:
1. Create Google Analytics account
2. Get tracking code
3. Add to `<head>` section of `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images to under 200KB
   - Use appropriate sizes for different devices

2. **Minimize HTTP Requests**
   - Combine CSS files
   - Use CDN for external libraries
   - Enable gzip compression

3. **Caching**
   - Set appropriate cache headers
   - Use browser caching
   - Implement service workers (optional)

## 🔧 Troubleshooting

### Contact Form Not Working
1. Check Google Apps Script URL is correct
2. Verify spreadsheet ID is correct
3. Ensure web app is deployed and accessible
4. Check browser console for errors

### Email Notifications Not Sending
1. Verify EmailJS configuration
2. Check email service is active
3. Test with EmailJS dashboard

### Styling Issues
1. Clear browser cache
2. Check CSS file is loading
3. Verify Bootstrap CDN is accessible

## 📈 SEO Optimization

1. **Meta Tags** (already included):
   - Title tag
   - Meta description
   - Viewport meta tag
   - Character encoding

2. **Additional SEO**:
   - Add Open Graph tags for social sharing
   - Include structured data (JSON-LD)
   - Optimize image alt tags
   - Create sitemap.xml

## 💰 Total Cost Breakdown

| Item | Cost | Provider |
|------|------|----------|
| Domain | $10-15/year | Namecheap/GoDaddy |
| Hosting | FREE | GitHub Pages/Netlify |
| Email Service | FREE | EmailJS (200 emails/month) |
| Google Sheets | FREE | Google Workspace |
| **Total** | **$10-15/year** | |

## 🎯 Next Steps

1. **Immediate**:
   - Customize content with your information
   - Set up Google Sheets and Apps Script
   - Deploy to GitHub Pages

2. **Short-term**:
   - Add your real projects and images
   - Configure custom domain
   - Set up email notifications

3. **Long-term**:
   - Add blog section
   - Implement CMS for easy updates
   - Add portfolio project details
   - Integrate with LinkedIn/Resume

## 📞 Support

If you need help with setup or customization:
1. Check the troubleshooting section above
2. Review the code comments
3. Test each component individually
4. Use browser developer tools for debugging

## 📄 License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**

Your professional portfolio website is now ready to showcase your skills and experience to the world! 