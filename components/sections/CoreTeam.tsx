"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Top Content Section */}
      <div className="flex-1 space-y-2 p-6 sm:p-7">
        <div>
          <h3 className="text-lg font-bold leading-tight sm:text-xl">
            {member.name}
          </h3>
          <p className="mt-2 text-xs font-medium text-silov-medium-gray sm:text-sm uppercase tracking-wide">
            {member.role}
          </p>
        </div>
        <div className="h-px bg-border/30" />
      </div>

      {/* Bottom Image Section - Flips */}
      <div className="relative w-full aspect-square overflow-hidden rounded-b-[28px] bg-gray-100">
        <div
          className="relative h-full w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Image */}
          <div
            className="absolute h-full w-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-all duration-300"
            />
          </div>

          {/* Back - Info */}
          <div
            className="absolute h-full w-full bg-silov-black p-6 flex items-start"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 space-y-3">
              {/* Role badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                  {member.role}
                </span>
              </div>
              
              {/* Bio text */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-light leading-relaxed text-white/95">
                  {member.bio}
                </p>
              </div>
              
              {/* Decorative accent line */}
              <div className="pt-1">
                <div className="h-px w-10 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

