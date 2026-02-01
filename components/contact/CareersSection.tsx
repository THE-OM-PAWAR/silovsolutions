"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Upload } from "lucide-react";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { uploadToCloudinary } from "@/lib/cloudinary";

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export function CareersSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    resumeFile: null as File | null,
    resumeUrl: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        alert("❌ Please upload a PDF or DOCX file only.");
        e.target.value = "";
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("❌ File size must be less than 5MB.");
        e.target.value = "";
        return;
      }
      setFormData({ ...formData, resumeFile: file });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.resumeFile) {
      alert("❌ Please upload your resume.");
      return;
    }

    setIsSubmitting(true);
    setIsUploading(true);

    try {
      // Step 1: Upload resume to Cloudinary
      const { url, downloadUrl } = await uploadToCloudinary(formData.resumeFile);
      setIsUploading(false);

      // Step 2: Send email with resume link via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: "Career Application",
          title: "New Career Application",
          message: `Name: ${formData.name}\nArea of Expertise: ${formData.expertise}\n\nResume (View): ${url}\nResume (Download): ${downloadUrl}`,
        }
      );

      console.log("EmailJS Success:", result);
      alert("✅ Application submitted successfully! We'll review your resume and get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        expertise: "",
        resumeFile: null,
        resumeUrl: "",
      });
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Submission Error:", error);
      if (isUploading) {
        alert("❌ Failed to upload resume. Please check your Cloudinary configuration and try again.");
      } else {
        alert("❌ Failed to submit application. Please try again or email us directly.");
      }
    } finally {
      setIsSubmitting(false);
      setIsUploading(false);
    }
  };

  return (
    <section id="careers" className="bg-gray-50/50 py-12 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-silov-light-gray">
              <Briefcase className="h-5 w-5 text-silov-black" />
            </div>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-4xl">
              Join Our Team
            </h2>
          </div>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray">
            We are always looking for bright minds in power electronics,
            embedded systems, and IoT. If you are passionate about renewable
            energy, we want to hear from you.
          </p>
          <p className="text-sm font-normal text-muted-foreground">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:silov.solutions@gmail.com"
              className="font-medium text-silov-black underline hover:no-underline"
            >
              silov.solutions@gmail.com
            </a>
            .
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border/40 bg-white p-6 shadow-sm sm:p-8">
          <Input
            placeholder="Name"
            className="h-11 rounded-md border-border/60"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            placeholder="Area of Expertise"
            className="h-11 rounded-md border-border/60"
            value={formData.expertise}
            onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
            required
          />
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Upload Resume (PDF/DOCX, Max 5MB)
            </label>
            <div className="relative">
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                className="h-11 rounded-md border-border/60"
                onChange={handleFileChange}
                required
              />
              {formData.resumeFile && (
                <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                  <Upload className="h-4 w-4" />
                  <span>{formData.resumeFile.name}</span>
                </div>
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 w-full rounded-md bg-silov-blue font-medium text-white hover:bg-silov-blue-dark disabled:opacity-50"
          >
            {isUploading
              ? "Uploading Resume..."
              : isSubmitting
              ? "Submitting..."
              : "Submit Application"}
          </Button>
        </form>
      </div>
    </section>
  );
}

