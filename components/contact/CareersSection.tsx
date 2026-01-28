import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase } from "lucide-react";

export function CareersSection() {
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
        <form className="space-y-4 rounded-lg border border-border/40 bg-white p-6 shadow-sm sm:p-8">
          <Input placeholder="Name" className="h-11 rounded-md border-border/60" />
          <Input placeholder="Area of Expertise" className="h-11 rounded-md border-border/60" />
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Upload Resume (PDF/DOCX)
            </label>
            <Input type="file" className="h-11 rounded-md border-border/60" />
          </div>
          <Button className="h-11 w-full rounded-md bg-silov-black font-medium text-white hover:bg-silov-dark-gray">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
}

