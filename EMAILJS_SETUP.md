# EmailJS Setup Guide for Portfolio Contact Form

## How to Enable Direct Email Sending

The contact form is configured to send emails directly from the website using EmailJS. Follow these steps to set it up:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the setup instructions to connect your email

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Save the template and note the Template ID

### 4. Get Your Keys
- Go to "Account" settings
- Copy your Public Key
- Note your Service ID from the Services page
- Note your Template ID from the Templates page

### 5. Update the Code
In `Components/Contact/GetInTouch.js`, replace:
- `'service_portfolio'` with your Service ID
- `'template_contact'` with your Template ID  
- `'your_public_key'` with your Public Key

### 6. Test the Form
- The form will now send emails directly
- If EmailJS fails, it falls back to opening the default email client

## Current Fallback
The form currently uses mailto: links as a fallback, which opens the user's default email client with the message pre-filled.
