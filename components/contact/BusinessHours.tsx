import { Clock } from "lucide-react";

export function BusinessHours() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-lg border border-border/40 bg-gradient-to-r from-gray-50/50 to-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-silov-light-gray">
              <Clock className="h-5 w-5 text-silov-black" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Monday to Friday, 9:00 AM – 6:00 PM IST
              </p>
              <p className="text-xs text-muted-foreground">
                We typically respond within 24–48 business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

