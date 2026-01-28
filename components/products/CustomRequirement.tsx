import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CustomRequirement() {
  return (
    <section id="custom-requirements" className="bg-silov-light-gray py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="space-y-5">
          <h2 className="text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Contact Us For Custom Product Requirements
          </h2>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray">
            Share your specifications and our engineering team will respond
            with a tailored solution for your application.
          </p>
        </div>
        <form className="space-y-4 rounded-lg border border-border/40 bg-white p-6 sm:p-8">
          <Input placeholder="Name" className="h-11 rounded-md border-border/60" />
          <Input placeholder="Email" type="email" className="h-11 rounded-md border-border/60" />
          <Textarea
            placeholder="Requirements"
            className="min-h-[120px] rounded-md border-border/60"
          />
          <Button className="h-11 w-full rounded-md bg-silov-black font-medium text-white hover:bg-silov-dark-gray">
            Submit your query now
          </Button>
        </form>
      </div>
    </section>
  );
}

