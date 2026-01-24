import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  return (
    <section id="inquiry" className="bg-silov-light-gray py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="space-y-6 rounded-sm border border-border/40 bg-white p-8 sm:p-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-normal text-foreground sm:text-4xl">
              Drop us a message
            </h2>
            <p className="text-base font-normal text-silov-dark-gray">
              Tell us about your requirements and our engineering team will
              respond shortly.
            </p>
          </div>
          <form className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Full Name" className="h-12 rounded-sm border-border/60 text-base sm:col-span-1" />
            <Input
              type="email"
              placeholder="Email Address"
              className="h-12 rounded-sm border-border/60 text-base sm:col-span-1"
            />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-normal uppercase tracking-[0.1em] text-muted-foreground">
                Subject
              </label>
              <select className="h-12 w-full rounded-sm border border-border/60 bg-transparent px-3 text-base font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-silov-black">
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <Textarea
              placeholder="Message / Requirements"
              className="min-h-[160px] rounded-sm border-border/60 text-base sm:col-span-2"
            />
            <Button className="h-12 rounded-sm bg-silov-black text-base font-normal text-white hover:bg-silov-dark-gray sm:col-span-2 sm:h-14">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

