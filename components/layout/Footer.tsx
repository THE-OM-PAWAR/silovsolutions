import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <div className="text-lg font-normal tracking-tight sm:text-xl">Silov Solutions Pvt. Ltd.</div>
          <p className="text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
            Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy
            Building, IIT Delhi, Hauz Khas, New Delhi - 110016.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-base font-normal sm:text-lg">Contact</div>
          <div className="space-y-2 text-sm font-normal text-zinc-400 sm:text-base">
            <p>silov.solutions@gmail.com</p>
            <p>+91 85273 32502</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-base font-normal sm:text-lg">Product Query</div>
          <form className="space-y-3">
            <Input
              className="h-11 rounded-sm border-white/20 bg-transparent text-sm font-normal text-white placeholder:text-zinc-500 sm:h-12 sm:text-base"
              placeholder="Email Address"
              type="email"
            />
            <Textarea
              className="min-h-[100px] rounded-sm border-white/20 bg-transparent text-sm font-normal text-white placeholder:text-zinc-500 sm:min-h-[120px] sm:text-base"
              placeholder="Share your query"
            />
            <Button className="h-11 w-full rounded-sm bg-white text-sm font-normal text-black transition-all hover:bg-zinc-200 sm:h-12 sm:text-base">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs font-normal text-zinc-500 sm:py-8 sm:text-sm">
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
}

