import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CareersSection() {
  return (
    <section id="careers" className="bg-white py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Join Our Team
          </p>
          <h2 className="text-3xl font-semibold text-foreground">
            Join Our Team
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            We are always looking for bright minds in power electronics,
            embedded systems, and IoT. If you are passionate about renewable
            energy, we want to hear from you.
          </p>
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:silov.solutions@gmail.com"
              className="text-emerald-600"
            >
              silov.solutions@gmail.com
            </a>
            .
          </p>
        </div>
        <form className="space-y-4 rounded-2xl border border-border/60 bg-zinc-50 p-6 shadow-sm">
          <Input placeholder="Name" />
          <Input placeholder="Area of Expertise" />
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Upload Resume (PDF/DOCX)
            </label>
            <Input type="file" />
          </div>
          <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-500">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
}

