import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silov-dark-blue">
            Contact Us Today
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Let&apos;s build your next power electronics solution
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            Get in touch for inquiries about our power electronics solutions.
          </p>
        </div>
        <form className="space-y-4 rounded-2xl border border-border/60 bg-zinc-50 p-6 shadow-sm">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email Address" type="email" />
          <Textarea
            placeholder="Your Product Requirements"
            className="min-h-[140px]"
          />
          <Button className="w-full bg-silov-dark-blue text-silov-white hover:bg-silov-medium-blue">
            Submit Your Requirements
          </Button>
        </form>
      </div>
    </section>
  );
}

