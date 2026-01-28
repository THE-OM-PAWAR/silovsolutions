export function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 text-left sm:px-6">
        <div className="space-y-5">
          <div className="inline-block rounded-full bg-silov-light-gray px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-silov-black">
              About Us
            </span>
          </div>
          <h1 className="text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Meet Our Founding Team
          </h1>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray">
            Our team comprises professionals from prestigious engineering institutes who have come together to dedicate themselves to the development and betterment of advanced power electronics.
          </p>
        </div>
      </div>
    </section>
  );
}

