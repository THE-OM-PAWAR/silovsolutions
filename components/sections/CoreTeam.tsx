import Image from "next/image";
import { Separator } from "../ui/separator";

const team = [
  {
    name: "Mr. Sumakesh Mishra",
    role: "Founder & CEO",
    bio: "Sumakesh graduated from IIT Delhi. He has worked at Boston Consulting Group (BCG) and Carlyle Group.",
    image: "/leadership/img_3231-768x768-1-YD0BkX6bG8Tx54zR.avif",
  },
  {
    name: "Mr. Durga Mahesh Natham",
    role: "Member of Technical Staff",
    bio: "Mahesh completed an M.Tech. in Autonomous Electrical Vehicle from Mahendra University; worked as a teaching assistant alongside it.",
    image: "/leadership/1731459721824-A85VvOWGW2hZXDBw.avif",
  },
  {
    name: "Prof. Sreedhar M.",
    role: "Technical Advisor",
    bio: "Prof. Sreedhar completed his post-doctorate from IIT Delhi. He is currently working as a Professor at Mahindra University.",
    image: "/leadership/images-2-AoPqBjJGOzh0Z5o4.avif",
  },
];

function TeamCard({ member }: { member: (typeof team)[0] }) {
  return (
    <article className="group flex h-full max-w-[280px] mx-auto flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl sm:max-w-none sm:mx-0">
      {/* Photo */}
      <div className="relative w-full flex-shrink-0 overflow-hidden bg-gray-100" style={{ aspectRatio: '1 / 1' }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 50vw, 240px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-silov-medium-gray sm:text-xs">
          {member.role}
        </p>
        <Separator className="my-2" />
        <p className="mt-2 text-xs leading-relaxed text-silov-dark-gray line-clamp-3 sm:text-sm">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export function CoreTeam() {
  return (
    <section className="bg-silov-cream py-12 sm:py-16 lg:py-20 min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 sm:px-8 lg:space-y-12">
        <div className="space-y-5 text-left">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
            Our Core Team
          </h2>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Our team comprises of professionals from different prestigious
            engineering institutes who have come together to dedicate themselves
            to the development and betterment of Power Systems and Sustainable
            energy sources focused on India.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
