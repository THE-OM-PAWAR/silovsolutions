export function ContactInfo() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
            Get in Touch
          </h1>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Have questions about our power electronics solutions or custom
            product development? Reach out to our team at IIT Delhi.
          </p>
          <div className="space-y-5 text-sm text-foreground">
            <div className="space-y-1">
              <p className="text-xs font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Address
              </p>
              <p className="text-base font-normal leading-relaxed">
                Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy
                Building, IIT Delhi, Hauz Khas, New Delhi - 110016.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Email
              </p>
              <p className="text-base font-normal">silov.solutions@gmail.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Phone
              </p>
              <p className="text-base font-normal">+91 85273 32502</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm border border-border/40 bg-zinc-50">
          <iframe
            title="IIT Delhi Synergy Building"
            src="https://maps.google.com/maps?q=IIT%20Delhi%20Synergy%20Building&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-96 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

