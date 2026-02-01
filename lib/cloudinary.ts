// Cloudinary Configuration
// Get these from https://console.cloudinary.com/

export const CLOUDINARY_CONFIG = {
  CLOUD_NAME: "dwqykrnzc", // Replace with your Cloudinary cloud name
  UPLOAD_PRESET: "silov_resumes", // Replace with your unsigned upload preset
};

// Upload file to Cloudinary
export async function uploadToCloudinary(file: File): Promise<{ url: string; downloadUrl: string }> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_CONFIG.UPLOAD_PRESET);
  formData.append("resource_type", "raw"); // Explicitly set as raw file

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.CLOUD_NAME}/raw/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Cloudinary upload error:", errorData);
    throw new Error(`Failed to upload file: ${errorData.error?.message || "Unknown error"}`);
  }

  const data = await response.json();
  
  // Create a download-friendly URL with fl_attachment flag
  const publicId = data.public_id;
  const format = data.format;
  const downloadUrl = `https://res.cloudinary.com/${CLOUDINARY_CONFIG.CLOUD_NAME}/raw/upload/fl_attachment/${publicId}`;
  
  return {
    url: data.secure_url, // Regular URL
    downloadUrl: downloadUrl, // Download-friendly URL
  };
}
