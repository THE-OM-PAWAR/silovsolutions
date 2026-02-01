"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAILJS_CONFIG } from "@/lib/emailjs";

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: "Contact form new response",
          message: formData.requirements,
        }
      );

      console.log("EmailJS Success:", result);
      alert("✅ Requirements submitted successfully! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        requirements: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-silov-cream py-12 sm:py-16 lg:py-20 min-h-screen flex items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s build your next power electronics solution
          </h2>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Get in touch for inquiries about our power electronics solutions.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-8 sm:p-10 shadow-lg">
          <Input
            placeholder="Your Name"
            className="h-12 rounded-2xl border-border/60 text-sm sm:text-base"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            placeholder="Your Email Address"
            type="email"
            className="h-12 rounded-2xl border-border/60 text-sm sm:text-base"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Product Requirements"
            className="min-h-[120px] rounded-2xl border-border/60 text-sm sm:text-base sm:min-h-[140px]"
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-2xl bg-silov-blue text-sm font-medium text-white transition-all hover:bg-silov-blue-dark sm:h-14 sm:text-base disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Your Requirements"}
          </Button>
        </form>
      </div>
    </section>
  );
}

