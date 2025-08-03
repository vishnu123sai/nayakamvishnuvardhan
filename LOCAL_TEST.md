# Local Testing Guide

## Quick Test Steps

### Step 1: Open the Website Locally
1. **Open File Explorer** and navigate to your project folder: `D:\AI 2025`
2. **Double-click** on `index.html` - it will open in your default browser
3. **Alternative**: Right-click `index.html` → "Open with" → Choose your preferred browser

### Step 2: Test the Contact Form
1. **Scroll down** to the "Contact" section (or click "Get In Touch" button)
2. **Fill out the form** with test data:
   - Name: `Test User`
   - Email: `test@example.com`
   - Subject: `Test Message`
   - Message: `This is a test message to verify the contact form is working.`
3. **Click "Send Message"**
4. **Expected Result**: You should see a green success message saying "Message received! I'll get back to you soon."

### Step 3: Test Navigation
1. **Click "Get In Touch"** button in hero section - should scroll to contact
2. **Click "View Projects"** button - should scroll to projects section
3. **Click navigation menu items** - should scroll smoothly to sections

## Troubleshooting

### If Contact Form Shows Error:
1. **Open Browser Developer Tools**:
   - Press `F12` or right-click → "Inspect"
   - Go to "Console" tab
2. **Look for error messages** in red
3. **Common issues**:
   - EmailJS not loaded (check internet connection)
   - JavaScript errors (check console)

### If Buttons Don't Work:
1. **Check if JavaScript is enabled** in your browser
2. **Try a different browser** (Chrome, Firefox, Edge)
3. **Clear browser cache** and refresh the page

### If Page Doesn't Load:
1. **Check file paths** - make sure all files are in the same folder:
   - `index.html`
   - `styles.css`
   - `script.js`
2. **Check internet connection** - Bootstrap and Font Awesome are loaded from CDN

## Advanced Testing

### Test All Features:
1. **Responsive Design**: Resize browser window to test mobile layout
2. **Animations**: Scroll through sections to see fade-in effects
3. **Hover Effects**: Hover over project cards and buttons
4. **Mobile Menu**: On mobile view, test the hamburger menu

### Browser Console Testing:
1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Submit contact form** and check for any error messages
4. **Look for these messages**:
   - `"Google Sheets not configured yet:"` (normal)
   - `"EmailJS not configured yet:"` (normal)
   - Any red error messages (need attention)

## Expected Behavior

### ✅ Working Features:
- Smooth scrolling navigation
- Contact form submission with success message
- Responsive design
- Animations and hover effects
- Mobile menu toggle

### ⚠️ Expected Console Messages:
- `"Google Sheets not configured yet:"` - This is normal
- `"EmailJS not configured yet:"` - This is normal
- These don't affect the form functionality

### ❌ Error Messages to Watch For:
- `"Failed to load resource"` - Network issues
- `"Uncaught TypeError"` - JavaScript errors
- `"Cannot read property"` - Missing elements

## Quick Fixes

### If Form Still Shows Error:
1. **Check the console** for specific error messages
2. **Try this test** - open browser console and type:
   ```javascript
   document.getElementById('contactForm')
   ```
   Should return the form element (not null)

### If Buttons Don't Scroll:
1. **Check if sections exist**:
   ```javascript
   document.querySelector('#contact')
   document.querySelector('#projects')
   ```
   Should return elements (not null)

## Next Steps After Testing

1. **If everything works**: Deploy to GitHub Pages
2. **If contact form works**: Set up EmailJS for real notifications
3. **If issues persist**: Check browser console for specific errors

## File Structure Check
Make sure you have these files in your folder:
```
D:\AI 2025\
├── index.html
├── styles.css
├── script.js
├── README.md
├── QUICK_SETUP.md
├── DEPLOYMENT.md
├── CONTACT_FORM_SETUP.md
└── LOCAL_TEST.md
```

Your website should work perfectly for local testing! 🚀 