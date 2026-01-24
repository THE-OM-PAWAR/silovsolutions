import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="bg-silov-light-gray py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s build your next power electronics solution
          </h2>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Get in touch for inquiries about our power electronics solutions.
          </p>
        </div>
        <form className="space-y-4 rounded-sm border border-border/40 bg-white p-8 sm:p-10">
          <Input placeholder="Your Name" className="h-12 rounded-sm border-border/60 text-base" />
          <Input placeholder="Your Email Address" type="email" className="h-12 rounded-sm border-border/60 text-base" />
          <Textarea
            placeholder="Your Product Requirements"
            className="min-h-[140px] rounded-sm border-border/60 text-base sm:min-h-[160px]"
          />
          <Button className="h-12 w-full rounded-sm bg-silov-black text-base font-normal text-white transition-all hover:bg-silov-dark-gray sm:h-14">
            Submit Your Requirements
          </Button>
        </form>
      </div>
    </section>
  );
}

