"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAILJS_CONFIG } from "@/lib/emailjs";

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Enquiry form new response",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(formData);
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          title: formData.subject,
          message: formData.message,
        }
      );

      console.log("EmailJS Success:", result);
      alert("✅ Message sent successfully! We'll get back to you soon.");
      setFormData({
        fullName: "",
        email: "",
        subject: "Product Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="space-y-5 rounded-lg border border-border/40 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-foreground sm:text-3xl">
              Drop us a message
            </h2>
            <p className="text-sm font-normal text-silov-dark-gray">
              Tell us about your requirements and our engineering team will
              respond shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="Full Name"
              className="h-11 rounded-md border-border/60 sm:col-span-1"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="h-11 rounded-md border-border/60 sm:col-span-1"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Subject
              </label>
              <select
                className="h-11 w-full rounded-md border border-border/60 bg-transparent px-3 text-sm font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-silov-black"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <Textarea
              placeholder="Message / Requirements"
              className="min-h-[140px] rounded-md border-border/60 sm:col-span-2"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 rounded-md bg-silov-blue font-medium text-white hover:bg-silov-blue-dark sm:col-span-2 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

