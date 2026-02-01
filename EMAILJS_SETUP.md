# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use these template variables in your email template:

```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Customize the template as needed
5. Copy your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it

## Step 5: Update Configuration
Open `lib/emailjs.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_xxxxxxx",     // Your Service ID
  TEMPLATE_ID: "template_xxxxxxx",   // Your Template ID
  PUBLIC_KEY: "your_public_key",     // Your Public Key
};
```

## Step 6: Test the Forms
1. Run your development server: `npm run dev`
2. Navigate to the homepage or contact page
3. Fill out and submit the form
4. Check for success/error alerts
5. Verify email delivery in your inbox

## Troubleshooting
- **CORS errors**: Make sure your domain is allowed in EmailJS dashboard settings
- **Template not found**: Double-check your Template ID
- **Service not found**: Verify your Service ID
- **Public key invalid**: Ensure you copied the correct Public Key

## Template Variables Used
Both forms send these variables to EmailJS:
- `from_name`: User's name
- `from_email`: User's email address
- `subject`: Form subject (Product Inquiry, Technical Support, etc.)
- `message`: User's message/requirements

Make sure your EmailJS template includes these variables!
