"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAILJS_CONFIG } from "@/lib/emailjs";

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    query: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: "Footer Query",
          email: formData.email,
          title: "Product Query from Footer",
          message: formData.query,
        }
      );

      console.log("EmailJS Success:", result);
      alert("✅ Query submitted successfully! We'll get back to you soon.");
      setFormData({
        email: "",
        query: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-silov-black text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
        <div className="space-y-5">
          <div className="text-lg font-bold tracking-tight sm:text-xl">Silov Solutions Pvt. Ltd.</div>
          <p className="text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
            Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy
            Building, IIT Delhi, Hauz Khas, New Delhi - 110016.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-base font-bold sm:text-lg">Contact</div>
          <div className="space-y-2 text-sm font-normal text-zinc-400 sm:text-base">
            <p>silov.solutions@gmail.com</p>
            <p>+91 85273 32502</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-base font-bold sm:text-lg">Product Query</div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              className="h-11 rounded-2xl border-white/20 bg-transparent text-sm font-normal text-white placeholder:text-zinc-500 sm:h-12 sm:text-base"
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Textarea
              className="min-h-[100px] rounded-2xl border-white/20 bg-transparent text-sm font-normal text-white placeholder:text-zinc-500 sm:min-h-[120px] sm:text-base"
              placeholder="Share your query"
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full rounded-2xl bg-white text-sm font-semibold text-black transition-all hover:bg-zinc-200 sm:h-12 sm:text-base disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs font-normal text-zinc-500 sm:py-8 sm:text-sm">
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
}

