import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-4">
          <div className="text-lg font-semibold">Silov Solutions Pvt. Ltd.</div>
          <p className="text-sm text-zinc-300">
            Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy
            Building, IIT Delhi, Hauz Khas, New Delhi - 110016.
          </p>
          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.15),rgba(14,165,233,0.1))] px-4 py-6 text-xs uppercase tracking-[0.25em] text-zinc-200">
            Circuit-inspired innovation
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-base font-semibold">Contact</div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>silov.solutions@gmail.com</p>
            <p>+91 85273 32502</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-base font-semibold">Product Query</div>
          <form className="space-y-3">
            <Input
              className="border-white/20 bg-transparent text-white placeholder:text-zinc-400"
              placeholder="Email Address"
              type="email"
            />
            <Textarea
              className="min-h-[120px] border-white/20 bg-transparent text-white placeholder:text-zinc-400"
              placeholder="Share your query"
            />
            <Button className="w-full bg-white text-black hover:bg-zinc-200">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-400">
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
}

