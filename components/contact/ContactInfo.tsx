export function ContactInfo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Get in Touch
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Have questions about our power electronics solutions or custom
            product development? Reach out to our team at IIT Delhi.
          </p>
          <div className="space-y-3 text-sm text-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Address
              </p>
              <p>
                Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy
                Building, IIT Delhi, Hauz Khas, New Delhi - 110016.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </p>
              <p>silov.solutions@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </p>
              <p>+91 85273 32502</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-zinc-100 shadow-sm">
          <iframe
            title="IIT Delhi Synergy Building"
            src="https://maps.google.com/maps?q=IIT%20Delhi%20Synergy%20Building&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

