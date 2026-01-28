import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="bg-silov-cream py-12 sm:py-16 lg:py-20 min-h-screen flex items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s build your next power electronics solution
          </h2>
          <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Get in touch for inquiries about our power electronics solutions.
          </p>
        </div>
        <form className="space-y-4 rounded-3xl bg-white p-8 sm:p-10 shadow-lg">
          <Input placeholder="Your Name" className="h-12 rounded-2xl border-border/60 text-sm sm:text-base" />
          <Input placeholder="Your Email Address" type="email" className="h-12 rounded-2xl border-border/60 text-sm sm:text-base" />
          <Textarea
            placeholder="Your Product Requirements"
            className="min-h-[120px] rounded-2xl border-border/60 text-sm sm:text-base sm:min-h-[140px]"
          />
          <Button className="h-12 w-full rounded-2xl bg-silov-blue text-sm font-medium text-white transition-all hover:bg-silov-blue-dark sm:h-14 sm:text-base">
            Submit Your Requirements
          </Button>
        </form>
      </div>
    </section>
  );
}

