"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-silov-light-gray px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-silov-black">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray">
            Have questions about our power electronics solutions or custom
            product development? Reach out to our team at IIT Delhi.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border/40 bg-white p-4 transition-shadow hover:shadow-md">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-silov-light-gray">
                <MapPin className="h-5 w-5 text-silov-black" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Address
                </p>
                <p className="text-sm font-normal leading-relaxed text-foreground">
                  Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy
                  Building, IIT Delhi, Hauz Khas, New Delhi - 110016.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border/40 bg-white p-4 transition-shadow hover:shadow-md">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-silov-light-gray">
                <Mail className="h-5 w-5 text-silov-black" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <a href="mailto:silov.solutions@gmail.com" className="text-sm font-medium text-silov-black hover:underline">
                  silov.solutions@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border/40 bg-white p-4 transition-shadow hover:shadow-md">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-silov-light-gray">
                <Phone className="h-5 w-5 text-silov-black" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </p>
                <a href="tel:+918527332502" className="text-sm font-medium text-silov-black hover:underline">
                  +91 85273 32502
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-border/40 bg-zinc-50 shadow-md">
          <iframe
            title="IIT Delhi Synergy Building"
            src="https://maps.google.com/maps?q=IIT%20Delhi%20Synergy%20Building&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-96 w-full border-0 lg:h-full lg:min-h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

