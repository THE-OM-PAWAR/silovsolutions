import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  return (
    <section id="inquiry" className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="space-y-5 rounded-lg border border-border/40 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-foreground sm:text-3xl">
              Drop us a message
            </h2>
            <p className="text-sm font-normal text-silov-dark-gray">
              Tell us about your requirements and our engineering team will
              respond shortly.
            </p>
          </div>
          <form className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Full Name" className="h-11 rounded-md border-border/60 sm:col-span-1" />
            <Input
              type="email"
              placeholder="Email Address"
              className="h-11 rounded-md border-border/60 sm:col-span-1"
            />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Subject
              </label>
              <select className="h-11 w-full rounded-md border border-border/60 bg-transparent px-3 text-sm font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-silov-black">
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <Textarea
              placeholder="Message / Requirements"
              className="min-h-[140px] rounded-md border-border/60 sm:col-span-2"
            />
            <Button className="h-11 rounded-md bg-silov-black font-medium text-white hover:bg-silov-dark-gray sm:col-span-2">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

