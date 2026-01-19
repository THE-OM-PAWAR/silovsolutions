import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BusinessHours } from "@/components/contact/BusinessHours";
import { CareersSection } from "@/components/contact/CareersSection";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { TrustBanner } from "@/components/contact/TrustBanner";

export const metadata: Metadata = {
  title: "Silov Solutions | Contact Us",
  description:
    "Get in touch with Silov Solutions for product inquiries, partnerships, and career opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header activePath="contact" />
      <main>
        <ContactInfo />
        <InquiryForm />
        <CareersSection />
        <BusinessHours />
        <TrustBanner />
      </main>
      <Footer />
    </div>
  );
}

