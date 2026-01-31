import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Mr. Sumakesh Mishra",
    role: "Founder & CEO",
    description:
      "An alumnus of IIT Delhi. Brings extensive strategic and technical experience from previous roles at The Boston Consulting Group (BCG) and The Carlyle Group.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mr. Durga Mahesh Natham",
    role: "Member of Technical Staff",
    description:
      "Holds an M.Tech in Autonomous Electrical Vehicles from Mahindra University. Specializes in power electronics and EV system integration.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Prof. Sreedhar Madichetty",
    role: "Technical Advisor",
    description:
      "Post-doctorate from IIT Delhi and currently a Professor at Mahindra University. Provides high-level academic oversight and R&D guidance.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

export function CoreTeam() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Meet Our Core Team
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            A blend of academic excellence and industry expertise
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Our leadership combines deep research with hands-on deployment
            experience to deliver resilient, field-ready power electronics.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="border-border/60 bg-white flex flex-col">
              <CardContent className="space-y-4 p-6 flex flex-col">
                <div 
                  className="relative w-full overflow-hidden rounded-2xl border border-border/60 flex-shrink-0 aspect-square" 
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="100vw, 43vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="text-sm font-medium text-emerald-600">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
