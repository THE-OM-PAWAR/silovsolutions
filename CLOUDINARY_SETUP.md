# Cloudinary Setup Instructions for Resume Upload

## Step 1: Create Cloudinary Account
1. Go to [https://cloudinary.com/](https://cloudinary.com/)
2. Sign up for a free account (allows 25GB storage and 25GB bandwidth/month)
3. Verify your email

## Step 2: Get Your Cloud Name
1. After logging in, you'll see your dashboard
2. Find your **Cloud Name** at the top of the dashboard
3. It looks like: `dxxxxxxxx` or a custom name you chose
4. Copy this Cloud Name

## Step 3: Create Upload Preset (Important!)
1. In the Cloudinary dashboard, click on **Settings** (gear icon)
2. Go to the **Upload** tab
3. Scroll down to **Upload presets**
4. Click **Add upload preset**
5. Configure the preset:
   - **Preset name**: Choose a name (e.g., `silov_resumes`)
   - **Signing Mode**: Select **Unsigned** (important for client-side uploads)
   - **Folder**: Optional - enter `resumes` to organize uploads
   - **Resource type**: Select **Auto** or leave default
   - **Access mode**: Select **Public** (important for file access)
   - **Delivery type**: Select **Upload**
6. Click **Save**
7. Copy the **Preset name** you just created

**IMPORTANT**: Make sure the preset allows "Public" access mode so the files can be downloaded!

## Step 4: Update Configuration
Open `lib/cloudinary.ts` and update:

```typescript
export const CLOUDINARY_CONFIG = {
  CLOUD_NAME: "dxxxxxxxx",           // Your Cloud Name from Step 2
  UPLOAD_PRESET: "silov_resumes",    // Your Preset name from Step 3
};
```

## Step 5: Test the Upload
1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Scroll to the "Join Our Team" section
4. Fill out the form and upload a test PDF/DOCX file
5. Submit the form
6. Check your Cloudinary dashboard → Media Library to see the uploaded file
7. Check your email for the application with the resume link

## File Restrictions
- **Allowed formats**: PDF, DOC, DOCX
- **Max file size**: 5MB
- Files are validated before upload

## How It Works
1. User fills out the career application form
2. User selects a resume file (PDF/DOCX)
3. On submit, the file is uploaded to Cloudinary
4. Cloudinary returns a secure URL for the uploaded file
5. EmailJS sends an email with the applicant's details and resume URL
6. You receive the email with a clickable link to download the resume

## Troubleshooting
- **Upload fails**: Check that your upload preset is set to "Unsigned"
- **CORS errors**: Ensure the preset allows uploads from your domain
- **File not found**: Verify the Cloud Name is correct
- **Invalid preset**: Double-check the preset name matches exactly

## Security Notes
- The upload preset is unsigned for client-side uploads
- Consider adding file size limits in Cloudinary settings
- You can restrict file types in the upload preset settings
- Monitor your Cloudinary usage to stay within free tier limits

## Alternative: Email Attachment (Not Recommended)
EmailJS has a 500KB attachment limit, which is too small for most resumes. That's why we use Cloudinary to host the files and send links instead.
