# Contact Form Setup Guide

## Quick Fix Applied ✅
The contact form will now show a success message even if the email services aren't configured yet. This allows you to test the form immediately.

## Option 1: EmailJS Setup (Recommended - Free)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Message:**
```
Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Your Code
Replace these values in `script.js`:

```javascript
// Line 3: Replace with your EmailJS public key
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Line 142: Replace with your service ID
await emailjs.send(
    'YOUR_SERVICE_ID_HERE', // Replace with your EmailJS service ID
    'YOUR_TEMPLATE_ID_HERE', // Replace with your EmailJS template ID
    templateParams
);
```

## Option 2: Google Sheets Setup (Alternative)

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form"
4. Note the spreadsheet ID from the URL

### Step 2: Deploy Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Copy the code from `google-apps-script.js`
4. Replace `SPREADSHEET_ID` with your actual spreadsheet ID
5. Click "Deploy" → "New deployment"
6. Choose "Web app"
7. Set access to "Anyone"
8. Deploy and copy the web app URL

### Step 3: Update Your Code
Replace the script URL in `script.js`:

```javascript
// Line 119: Replace with your Google Apps Script URL
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

## Testing Your Setup

### Test EmailJS:
1. Fill out the contact form
2. Check your email for the notification
3. Check browser console for any errors

### Test Google Sheets:
1. Fill out the contact form
2. Check your Google Sheet for new entries
3. Check browser console for any errors

## Troubleshooting

### EmailJS Issues:
- **"Service not found"**: Check your service ID
- **"Template not found"**: Check your template ID
- **"Public key invalid"**: Check your public key
- **"Quota exceeded"**: Free tier has limits (200 emails/month)

### Google Sheets Issues:
- **"Script not found"**: Check your web app URL
- **"Access denied"**: Make sure web app is set to "Anyone"
- **"Spreadsheet not found"**: Check your spreadsheet ID

### General Issues:
- **Form not submitting**: Check browser console for JavaScript errors
- **Success message not showing**: Check if `showAlert` function exists
- **Loading state stuck**: Check if button is being re-enabled

## Quick Test
After setup, test with this data:
- Name: Test User
- Email: test@example.com
- Subject: Test Message
- Message: This is a test message

You should receive an email and see an entry in Google Sheets (if configured).

## Next Steps
1. Test the form thoroughly
2. Customize the email template
3. Set up email filters if needed
4. Consider adding spam protection
5. Monitor your usage (free tiers have limits)

Your contact form should now work properly! 🎉 