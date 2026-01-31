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
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg border border-border/40 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
              <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-8">
                {/* Profile Image */}
                <div className="md:col-span-1 flex-shrink-0">
                  <div 
                    className="relative mx-auto w-48 overflow-hidden rounded-lg border-2 border-border/40 md:w-full" 
                    style={{ aspectRatio: '1', minHeight: 0 }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all hover:grayscale-0"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=256&background=000000&color=ffffff&bold=true`;
                      }}
                    />
                  </div>
                </div>

                {/* Profile Content */}
                <div className="space-y-4 md:col-span-1">
                  {/* Name and Title */}
                  <div className="text-left">
                    <h2 className="text-2xl font-medium text-silov-black md:text-3xl">
                      {member.name}
                    </h2>
                    <h3 className="mt-1 text-base font-normal text-muted-foreground">
                      {member.title}
                    </h3>
                  </div>

                  {/* Biography */}
                  <div className="prose prose-lg max-w-none">
                    {/* Collapsible bio with More/Less button - responsive to screen size */}
                    {(() => {
                      // We'll show n lines depending on breakpoint
                      // 3 lines on mobile, 6 lines on md and up
                      // We approximate "lines" by splitting sentences or by char length
                      // Here, we split by ". " and adjust cutoff accordingly
                      // If bio is short, just show all

                      const [expanded, setExpanded] = React.useState(false);

                      // Split bio by sentence
                      const sentences = member.bio.split(/(?<=\.)\s+/);

                      // Responsive: useWindowWidth to pick how many lines
                      const [windowWidth, setWindowWidth] = React.useState(
                        typeof window !== "undefined" ? window.innerWidth : 1024
                      );

                      React.useEffect(() => {
                        function handleResize() {
                          setWindowWidth(window.innerWidth);
                        }
                        window.addEventListener("resize", handleResize);
                        return () => window.removeEventListener("resize", handleResize);
                      }, []);

                      // Set lines shown / sentences shown depending on breakpoint
                      let sentencesToShow = windowWidth < 768 ? 3 : 5;
                      const shouldShowButton = sentences.length > sentencesToShow;

                      const shownText = sentences.slice(0, sentencesToShow).join(" ");
                      const hiddenText = sentences.slice(sentencesToShow).join(" ");

                      return (
                        <div>
                          <p className="text-base font-normal leading-relaxed text-silov-dark-gray">
                            {expanded || !shouldShowButton ? (
                              <>
                                {member.bio}
                                {shouldShowButton && (
                                  <>
                                    {" "}
                                    <button
                                      className="ml-2 text-silov-black underline underline-offset-2 hover:text-silov-dark-gray focus:outline-none"
                                      onClick={() => setExpanded(false)}
                                      type="button"
                                    >
                                      Less
                                    </button>
                                  </>
                                )}
                              </>
                            ) : (
                              <>
                                {shownText}
                                {"... "}
                                <button
                                  className="text-silov-black underline underline-offset-2 hover:text-silov-dark-gray focus:outline-none"
                                  onClick={() => setExpanded(true)}
                                  type="button"
                                >
                                  More
                                </button>
                              </>
                            )}
                          </p>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Awards and Honours Accordion */}
                  {member.awards.length > 0 && (() => {
                    const [isAwardsOpen, setIsAwardsOpen] = React.useState(false);
                    return (
                      <div className="rounded-md border border-border/40 bg-gray-50/50">
                        <button
                          onClick={() => setIsAwardsOpen(!isAwardsOpen)}
                          className="flex w-full items-center justify-between p-4 text-left text-base font-medium text-silov-black transition-colors hover:bg-gray-100/50 focus:outline-none"
                          type="button"
                        >
                          <span>Awards and Honours</span>
                          <svg
                            className={`h-4 w-4 transition-transform ${isAwardsOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isAwardsOpen && (
                          <ul className="space-y-2 border-t border-border/40 p-4">
                            {member.awards.map((award, awardIndex) => (
                              <li key={awardIndex} className="flex items-start">
                                <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-silov-blue"></span>
                                <span className="text-sm font-normal text-silov-dark-gray">{award}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })()}

                  {/* Publications and Patents Accordion */}
                  {(() => {
                    const [isPublicationsOpen, setIsPublicationsOpen] = React.useState(false);
                    return (
                      <div className="rounded-md border border-border/40 bg-gray-50/50">
                        <button
                          onClick={() => setIsPublicationsOpen(!isPublicationsOpen)}
                          className="flex w-full items-center justify-between p-4 text-left text-base font-medium text-silov-black transition-colors hover:bg-gray-100/50 focus:outline-none"
                          type="button"
                        >
                          <span>Publications and Patents</span>
                          <svg
                            className={`h-4 w-4 transition-transform ${isPublicationsOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isPublicationsOpen && (
                          <ul className="space-y-2 border-t border-border/40 p-4">
                            {member.publications.map((publication, pubIndex) => (
                              <li key={pubIndex} className="flex items-start">
                                <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-silov-blue"></span>
                                <span className="text-sm font-normal text-silov-dark-gray">{publication}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}