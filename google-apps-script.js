// Google Apps Script for Portfolio Contact Form
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (replace with your spreadsheet ID)
    const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.name,
      data.email,
      data.subject,
      data.message,
      data.timestamp
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the spreadsheet headers
function setupSpreadsheet() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Subject',
    'Message',
    'Form Timestamp'
  ];
  
  // Clear existing content and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4285f4')
    .setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Spreadsheet setup complete!');
}

// Function to test the web app
function testWebApp() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'This is a test message',
    timestamp: new Date().toISOString()
  };
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(testData)
  };
  
  try {
    const response = UrlFetchApp.fetch('YOUR_WEB_APP_URL', options);
    console.log('Test response:', response.getContentText());
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Function to create a new spreadsheet and return its ID
function createNewSpreadsheet() {
  const spreadsheet = SpreadsheetApp.create('Portfolio Contact Form Responses');
  const sheet = spreadsheet.getActiveSheet();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Subject',
    'Message',
    'Form Timestamp'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4285f4')
    .setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('New spreadsheet created with ID:', spreadsheet.getId());
  console.log('Spreadsheet URL:', spreadsheet.getUrl());
  
  return spreadsheet.getId();
}

// Function to get spreadsheet statistics
function getSpreadsheetStats() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  const lastRow = sheet.getLastRow();
  const totalSubmissions = lastRow - 1; // Subtract header row
  
  console.log('Total form submissions:', totalSubmissions);
  
  if (totalSubmissions > 0) {
    const lastSubmission = sheet.getRange(lastRow, 1, 1, 6).getValues()[0];
    console.log('Last submission:', {
      timestamp: lastSubmission[0],
      name: lastSubmission[1],
      email: lastSubmission[2],
      subject: lastSubmission[3]
    });
  }
  
  return {
    totalSubmissions: totalSubmissions,
    lastRow: lastRow
  };
}

// Function to clean up old submissions (optional)
function cleanupOldSubmissions(daysToKeep = 30) {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return; // Only header row exists
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  
  let rowsToDelete = [];
  
  // Check each row (skip header)
  for (let i = 2; i <= lastRow; i++) {
    const timestamp = sheet.getRange(i, 1).getValue();
    if (timestamp < cutoffDate) {
      rowsToDelete.push(i);
    }
  }
  
  // Delete rows from bottom to top to avoid index issues
  for (let i = rowsToDelete.length - 1; i >= 0; i--) {
    sheet.deleteRow(rowsToDelete[i]);
  }
  
  console.log(`Deleted ${rowsToDelete.length} old submissions`);
}

// Function to export data to CSV
function exportToCSV() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  const data = sheet.getDataRange().getValues();
  let csvContent = '';
  
  data.forEach(row => {
    csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
  });
  
  // Create a file in Google Drive
  const fileName = `Portfolio_Contacts_${new Date().toISOString().split('T')[0]}.csv`;
  const file = DriveApp.createFile(fileName, csvContent, MimeType.CSV);
  
  console.log('CSV exported:', file.getUrl());
  return file.getUrl();
}

// Function to set up email notifications (alternative to EmailJS)
function setupEmailNotifications() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  // Create a trigger to send email on form submission
  ScriptApp.newTrigger('sendEmailNotification')
    .forSpreadsheet(spreadsheetId)
    .onFormSubmit()
    .create();
}

// Function to send email notification (triggered by form submission)
function sendEmailNotification(e) {
  const row = e.range.getRow();
  const sheet = e.source.getActiveSheet();
  const data = sheet.getRange(row, 1, 1, 6).getValues()[0];
  
  const subject = `New Portfolio Contact: ${data[3]}`;
  const message = `
    New contact form submission:
    
    Name: ${data[1]}
    Email: ${data[2]}
    Subject: ${data[3]}
    Message: ${data[4]}
    Timestamp: ${data[0]}
  `;
  
  // Send email to yourself
  MailApp.sendEmail({
    to: 'your-email@example.com', // Replace with your email
    subject: subject,
    body: message
  });
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Enhanced doPost with validation
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields');
    }
    
    // Validate email format
    if (!isValidEmail(data.email)) {
      throw new Error('Invalid email format');
    }
    
    // Sanitize data
    const sanitizedData = {
      name: data.name.trim().substring(0, 100),
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim().substring(0, 200),
      message: data.message.trim().substring(0, 1000),
      timestamp: new Date().toISOString()
    };
    
    // Get the active spreadsheet
    const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      sanitizedData.name,
      sanitizedData.email,
      sanitizedData.subject,
      sanitizedData.message,
      sanitizedData.timestamp
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Optional: Send immediate email notification
    try {
      sendEmailNotification({
        range: sheet.getRange(sheet.getLastRow(), 1, 1, 6),
        source: SpreadsheetApp.openById(spreadsheetId)
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'error': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
} 