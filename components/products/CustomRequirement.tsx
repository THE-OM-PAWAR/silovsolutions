import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CustomRequirement() {
  return (
    <section id="custom-requirements" className="bg-zinc-50 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Custom Requirements
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Contact Us For Custom Product Requirements
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            Share your specifications and our engineering team will respond
            with a tailored solution for your application.
          </p>
        </div>
        <form className="space-y-4 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Textarea
            placeholder="Requirements"
            className="min-h-[140px]"
          />
          <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-500">
            Submit your query now
          </Button>
        </form>
      </div>
    </section>
  );
}

