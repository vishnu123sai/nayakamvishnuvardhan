# Google Sheets Setup Guide

## Current Status ✅
Your EmailJS is working! Now let's set up Google Sheets to store contact form data.

## Step-by-Step Google Sheets Setup

### Step 1: Create Google Sheet
1. **Go to** [sheets.google.com](https://sheets.google.com)
2. **Click "Blank"** to create a new spreadsheet
3. **Name it** "Portfolio Contact Form Responses"
4. **Note the Spreadsheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789JKL/d/edit`
   - Your ID is: `1ABC123DEF456GHI789JKL`

### Step 2: Set Up Headers
1. **In your Google Sheet**, add these headers in row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Subject
   E1: Message
   F1: Form Timestamp
   ```
2. **Format headers** (optional):
   - Select row 1
   - Make text bold
   - Add background color

### Step 3: Deploy Google Apps Script
1. **Go to** [script.google.com](https://script.google.com)
2. **Click "New Project"**
3. **Delete the default code** and paste the entire content from `google-apps-script.js`
4. **Replace the spreadsheet ID**:
   - Find line: `const spreadsheetId = 'YOUR_SPREADSHEET_ID';`
   - Replace with your actual spreadsheet ID

### Step 4: Deploy as Web App
1. **Click "Deploy"** → **"New deployment"**
2. **Choose type**: "Web app"
3. **Set access**: "Anyone" (for public access)
4. **Click "Deploy"**
5. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`)

### Step 5: Update Your Website Code
Replace the script URL in `script.js`:

**Find this line:**
```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbxjFvi7LeP9dnr-eSVY86H3xLMTjtmuisFEkGof3M3n1AcHo0bRxmlM6meUSi-dPz98/exec';
```

**Replace with your new Web App URL:**
```javascript
const scriptURL = 'YOUR_NEW_WEB_APP_URL_HERE';
```

### Step 6: Test the Integration
1. **Save all files**
2. **Refresh your website**
3. **Submit a test contact form**
4. **Check your Google Sheet** for new entries

## Detailed Instructions

### Creating the Google Sheet:
1. Open [sheets.google.com](https://sheets.google.com)
2. Click "Blank" spreadsheet
3. Rename it to "Portfolio Contact Form Responses"
4. Copy the spreadsheet ID from the URL

### Setting Up Google Apps Script:
1. Open [script.google.com](https://script.google.com)
2. Create new project
3. Replace all code with content from `google-apps-script.js`
4. Update the spreadsheet ID in the code
5. Deploy as web app with "Anyone" access

### Updating Your Website:
1. Open `script.js`
2. Find the `sendToGoogleSheets` function
3. Replace the script URL with your new web app URL
4. Save the file

## Troubleshooting

### ❌ "Spreadsheet not found" error:
- Check your spreadsheet ID is correct
- Make sure the spreadsheet is accessible
- Verify the ID is copied from the URL correctly

### ❌ "Access denied" error:
- Make sure web app is set to "Anyone" access
- Check if you're logged into the correct Google account
- Try redeploying the web app

### ❌ "Script not found" error:
- Check your web app URL is correct
- Make sure the script is deployed
- Verify the deployment is active

### ❌ Data not appearing in sheet:
- Check browser console for errors
- Verify the web app URL is correct
- Make sure the spreadsheet ID is updated in the script

## Testing Your Setup

### Test Data:
```
Name: Test User
Email: test@example.com
Subject: Google Sheets Test
Message: This is a test message to verify Google Sheets integration.
```

### Expected Result:
- New row appears in your Google Sheet
- Data includes timestamp, name, email, subject, message
- No errors in browser console

## Security Notes

### For Production:
- Consider limiting web app access
- Set up proper authentication if needed
- Monitor your Google Apps Script usage

### Free Tier Limits:
- Google Apps Script: 20,000 requests/day (free)
- Google Sheets: 10,000 requests/day (free)
- Perfect for portfolio websites

## Next Steps

1. **Test the integration** thoroughly
2. **Set up email notifications** for new submissions (optional)
3. **Deploy your website**
4. **Monitor your Google Sheets** for new contacts

Your contact form will now store data in Google Sheets! 📊 