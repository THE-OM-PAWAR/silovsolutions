import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CustomRequirement() {
  return (
    <section id="custom-requirements" className="bg-silov-light-gray py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Contact Us For Custom Product Requirements
          </h2>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Share your specifications and our engineering team will respond
            with a tailored solution for your application.
          </p>
        </div>
        <form className="space-y-4 rounded-sm border border-border/40 bg-white p-8 sm:p-10">
          <Input placeholder="Name" className="h-12 rounded-sm border-border/60 text-base" />
          <Input placeholder="Email" type="email" className="h-12 rounded-sm border-border/60 text-base" />
          <Textarea
            placeholder="Requirements"
            className="min-h-[140px] rounded-sm border-border/60 text-base"
          />
          <Button className="h-12 w-full rounded-sm bg-silov-black text-base font-normal text-white hover:bg-silov-dark-gray sm:h-14">
            Submit your query now
          </Button>
        </form>
      </div>
    </section>
  );
}

