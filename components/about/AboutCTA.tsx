import Link from "next/link";

import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Join Our Mission</h2>
          <p className="max-w-2xl text-sm text-zinc-300">
            We are always looking for passionate engineers and partners to help
            us shape the future of power electronics.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-full bg-emerald-500 text-black">
            <Link href="/products">View Our Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/40 text-white hover:bg-white/10"
          >
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

