# EmailJS Setup Guide

## Current Status ✅
Your contact form is working! The green success message means the form submits correctly. Now let's set up email notifications.

## Step-by-Step EmailJS Setup

### Step 1: Create EmailJS Account
1. **Go to** [emailjs.com](https://emailjs.com)
2. **Click "Sign Up"** (top right)
3. **Create account** with your email
4. **Verify your email** (check inbox)

### Step 2: Create Email Service
1. **Login** to EmailJS dashboard
2. **Go to "Email Services"** (left sidebar)
3. **Click "Add New Service"**
4. **Choose "Gmail"** (recommended)
5. **Connect your Gmail account**
6. **Note your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. **Go to "Email Templates"** (left sidebar)
2. **Click "Create New Template"**
3. **Fill in the template:**

**Template Name:** `Portfolio Contact Form`

**Subject:** `New Contact Form Message from {{from_name}}`

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

4. **Save the template**
5. **Note your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. **Go to "Account"** (left sidebar)
2. **Click "API Keys"**
3. **Copy your Public Key** (looks like `user_abc123`)

### Step 5: Update Your Code
Replace these values in `script.js`:

**Line 3:** Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key
**Line 142:** Replace `YOUR_SERVICE_ID_HERE` with your service ID
**Line 143:** Replace `YOUR_TEMPLATE_ID_HERE` with your template ID

### Step 6: Test
1. **Save the script.js file**
2. **Refresh your website**
3. **Submit a test contact form**
4. **Check your email** for the notification

## Example Configuration
```javascript
// Line 3
emailjs.init("user_abc123def456"); // Your public key

// Line 142-143
await emailjs.send(
    'service_xyz789', // Your service ID
    'template_abc123', // Your template ID
    templateParams
);
```

## Troubleshooting

### ❌ "Service not found" error:
- Check your service ID is correct
- Make sure Gmail service is connected

### ❌ "Template not found" error:
- Check your template ID is correct
- Make sure template is saved

### ❌ "Public key invalid" error:
- Check your public key is correct
- Make sure you copied the full key

### ❌ No email received:
- Check your spam folder
- Verify Gmail connection in EmailJS
- Check EmailJS dashboard for delivery status

## Free Tier Limits
- **200 emails per month** (free)
- **Perfect for portfolio websites**
- **Upgrade if you need more**

## Next Steps
1. **Test email notifications** work
2. **Set up Google Sheets** (optional)
3. **Deploy your website**
4. **Monitor your usage**

Your contact form will now send real email notifications! 🎉 