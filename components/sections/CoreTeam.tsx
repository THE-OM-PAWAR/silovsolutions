import Image from "next/image";

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

export function CoreTeam() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Our Core Team
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground">
            Our team comprises of professionals from different prestigious
            engineering institutes who have come together to dedicate themselves
            to the development and betterment of Power Systems and Sustainable
            energy sources focused on India.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-sky-100 bg-sky-50/60 p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="text-sm font-medium text-slate-600">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

