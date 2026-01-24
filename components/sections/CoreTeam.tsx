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
    <section className="bg-silov-light-gray py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:space-y-16">
        <div className="space-y-6 text-left">
          <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Our Core Team
          </h2>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Our team comprises of professionals from different prestigious
            engineering institutes who have come together to dedicate themselves
            to the development and betterment of Power Systems and Sustainable
            energy sources focused on India.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-white sm:h-20 sm:w-20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-base font-normal text-foreground sm:text-lg">
                    {member.name}
                  </p>
                  <p className="text-sm font-normal text-muted-foreground sm:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-sm font-normal leading-relaxed text-silov-dark-gray sm:text-base">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

