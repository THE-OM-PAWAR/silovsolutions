'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  awards: string[];
  publications: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Sumakesh Mishra",
    title: "Founder & CEO",
    image: "/leadership/img_3231-768x768-1-YD0BkX6bG8Tx54zR.avif",
    bio: "Mr. Sumakesh graduated from IIT Delhi in 2020, with a B.Tech. degree. He secured 3rd Rank at his department with significant research in nano-plasmonics, knitting technology, printable battery technology, and non-woven textiles (with 3 successful publications). He worked at BCG (Boston Consulting Group) on several projects across healthcare, financial services, and specialty chemicals. His next and final stint was as a Private Equity Analyst at The Carlyle Group where he successfully completed three marquee transactions, conducted diligence on 5+ assets and actively managed 5 portfolio companies.",
    awards: [
      "INAE Innovative Student Project Award 2020",
      "Jayant Sinha Cash Prize (convocation award, IITD)",
      "Mrs. Chander Kanta Nanda Excellence Cash Award (convocation award, IITD)",
      "IITD Academic Merit Award",
      "Outstanding cumulative contribution to Fine Arts, IITD"
    ],
    publications: [
      "A study of curling in rib-knit constructions",
      "Plasmonic-enhanced microcrystalline silicon solar cells",
      "Plasmonic enhancement of absorption in bulk-heterojunction organic solar cells",
      "Patent: Air Purification Device (IN 202011027838)"
    ]
  },
  {
    name: "Durga Mahesh Natham",
    title: "Member of Technical Staff",
    image: "/leadership/1731459721824-A85VvOWGW2hZXDBw.avif",
    bio: "Mr. Durga Mahesh Natham is a skilled engineer specializing in power electronics, embedded systems, and electric vehicle technologies. He completed his M.Tech. in Autonomous Electric Vehicles from Mahindra University, securing second rank in his batch. With a strong foundation in STM32-based development, MATLAB, and advanced control strategies, Mr. Mahesh has led projects involving grid-connected inverters, multi-motor control systems, and autonomous vehicle platforms. He is also proficient in LabVIEW, PCB design, and real-time system integration. He has applied for two patents in the domain of power converters and EV charging systems, and continues to contribute to research and development in sustainable and intelligent mobility.",
    awards: [],
    publications: [
      "A Compact Dual-Mode Converter for Dynamic Energy Optimisation",
      "Automated Electric Vehicle Charging with Adaptive Movement Mechanism"
    ]
  },
  {
    name: "Prof. Sreedhar M.",
    title: "Technical Advisor",
    image: "/leadership/images-2-AoPqBjJGOzh0Z5o4.avif",
    bio: "Dr. Sreedhar Madichetty (SMC), a Senior Member of IEEE, is a trailblazing researcher in sustainable cyber-physical systems, recognized internationally for his significant academic, research, and industrial contributions. With over 100 Web of Science-indexed publications, widely cited globally, his work addresses critical challenges in renewable energy, electric vehicles (EVs), and power electronics. His 2022 article, 'New Trends in Electric Motors and Selection for EV Propulsion Systems', earned the Highest Downloaded Paper recognition from IET Electrical Systems in Transportation.",
    awards: [
      "In 2024, Dr. Madichetty's exceptional contributions were recognized with the prestigious IEI Young Engineer Award by the Institute of Engineers India, Electrical Engineering Discipline.",
      "He also won the Gold Award at the IEEE R-10 Humanitarian Technology Conference for his innovative Plug and Play IV Curve Tracer for Solar Farms.",
      "His collaborative research on \"Route Map Towards Road Freight Electrification\" earned both the Best Paper Award (Gold) and Best Presentation Award (Silver) at major international conferences."
    ],
    publications: [
      "20+ IET / IEEE Transactions",
      "2 publications, 15+ IEEE Conference Papers",
      "Authored 5 books and 2 Conference Proceedings"
    ]
  }
];

export function TeamProfiles() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=256&background=3b82f6&color=ffffff&bold=true`;
                      }}
                    />
                  </div>
                </div>

                {/* Profile Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Name and Title */}
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <h3 className="text-xl text-blue-600 font-semibold">
                      {member.title}
                    </h3>
                  </div>

                  {/* Biography */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Awards and Honours */}
                  {member.awards.length > 0 && (
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                        Awards and Honours
                      </h4>
                      <ul className="space-y-2">
                        {member.awards.map((award, awardIndex) => (
                          <li key={awardIndex} className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Publications and Patents */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                      Publications and Patents
                    </h4>
                    <ul className="space-y-2">
                      {member.publications.map((publication, pubIndex) => (
                        <li key={pubIndex} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{publication}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}