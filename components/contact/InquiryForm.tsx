import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  return (
    <section id="inquiry" className="bg-zinc-50 py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="space-y-4 rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Drop us a message
            </p>
            <h2 className="text-3xl font-semibold text-foreground">
              Drop us a message
            </h2>
            <p className="text-sm text-muted-foreground">
              Tell us about your requirements and our engineering team will
              respond shortly.
            </p>
          </div>
          <form className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Full Name" className="sm:col-span-1" />
            <Input
              type="email"
              placeholder="Email Address"
              className="sm:col-span-1"
            />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Subject
              </label>
              <select className="h-11 w-full rounded-md border border-border bg-transparent px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <Textarea
              placeholder="Message / Requirements"
              className="min-h-[160px] sm:col-span-2"
            />
            <Button className="h-11 bg-emerald-600 text-white hover:bg-emerald-500 sm:col-span-2">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

