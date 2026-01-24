import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CareersSection() {
  return (
    <section id="careers" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Join Our Team
          </h2>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            We are always looking for bright minds in power electronics,
            embedded systems, and IoT. If you are passionate about renewable
            energy, we want to hear from you.
          </p>
          <p className="text-sm font-normal text-muted-foreground">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:silov.solutions@gmail.com"
              className="text-silov-black underline"
            >
              silov.solutions@gmail.com
            </a>
            .
          </p>
        </div>
        <form className="space-y-4 rounded-sm border border-border/40 bg-silov-light-gray p-8 sm:p-10">
          <Input placeholder="Name" className="h-12 rounded-sm border-border/60 bg-white text-base" />
          <Input placeholder="Area of Expertise" className="h-12 rounded-sm border-border/60 bg-white text-base" />
          <div>
            <label className="mb-2 block text-sm font-normal uppercase tracking-[0.1em] text-muted-foreground">
              Upload Resume (PDF/DOCX)
            </label>
            <Input type="file" className="h-12 rounded-sm border-border/60 bg-white text-base" />
          </div>
          <Button className="h-12 w-full rounded-sm bg-silov-black text-base font-normal text-white hover:bg-silov-dark-gray sm:h-14">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
}

