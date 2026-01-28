"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const awards = [
  {
    title: "INAE Startup Innovation",
    subtitle: "Award for Clean Mobility",
    year: "2022",
    description:
      "Acknowledging the groundbreaking work in renewable energy technology, particularly in developing cost-effective and efficient solutions for e-mobility.",
    image: "/recognition/images-4-ALp76oNvQDhOgjyk.avif",
    color: "bg-gray-200",
  },
  {
    title: "IEEE (Delhi) Technology",
    subtitle: "Startup of the Year",
    year: "2020",
    description:
      "Highlighting their technological expertise and contributions towards advancing cost-effective clean energy technologies that impact industries and communities globally.",
    image: "/recognition/images-5-m2WaLQ20zohQaXLL.png",
    color: "bg-gray-200",
  },
  {
    title: "Social Alpha Energy",
    subtitle: "Challenge 2.0",
    year: "2018",
    description:
      "Recognizing the innovative, cost-effective renewable energy technologies, advancing accessibility and efficiency in clean energy.",
    image: "/recognition/social_alpha_logo-Yg2q09ezR5FLPbbP.avif",
    color: "bg-gray-200",
  },
  {
    title: "Clean Energy Int'l",
    subtitle: "Incubation Centre",
    year: "(CEIIC), TATA",
    description:
      "Incubated at CEIC TATA, highlighting their contribution to clean energy.",
    image: "/recognition/images-6-A85Eb4Wn70HDg7r8.avif",
    color: "bg-gray-200",
  },
];

export function Awards() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 sm:px-8 lg:space-y-12">
        <div className="space-y-5 text-left">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
            Major Recognitions
          </h2>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            We have a proven track record of developing cutting-edge technology
            which led us to receive multiple awards and recognitions from
            leading academic and entrepreneurial organizations.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {awards.map((award) => (
            <div
              key={`${award.title}-${award.year}`}
              className="group relative flex-shrink-0 w-[70vw] sm:w-[280px] lg:w-[300px] h-[420px] sm:h-[440px] overflow-hidden rounded-[28px] bg-white shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02] snap-center snap-always"
            >
              {/* Top Section - Colored Header */}
              <div className={`relative ${award.color} h-[45%] p-6 sm:p-7 flex flex-col`}>
                {/* Badges */}
                <div className="flex gap-2 mb-2">
                  <span className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-silov-black uppercase tracking-wide">
                    {award.year}
                  </span>
                  <span className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-silov-black uppercase tracking-wide">
                    Award
                  </span>
                </div>

                {/* Circular Icon - Top Right */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={56}
                    height={56}
                    className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex-1 flex flex-col justify-center space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight text-silov-black">
                    {award.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium leading-relaxed text-silov-dark-gray">
                    {award.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Section - Image */}
              <div className={`relative h-[55%] ${award.color} overflow-hidden rounded-b-[28px] p-1.5`}>
                <div className="relative h-full w-full flex items-center justify-center p-6 bg-white rounded-[24px] shadow-lg">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="rounded-b-3xl object-center w-full h-full object-contain"
                  />
                </div>
                {/* Read More Button */}
                <div className="absolute bottom-4 left-4">
                  <button className="group/btn bg-white/95 backdrop-blur-sm hover:bg-white rounded-full px-4 py-2 flex items-center gap-2 transition-all shadow-md hover:shadow-lg border border-silov-black/10">
                    <span className="text-xs font-semibold text-silov-black sm:text-sm">Read More</span>
                    <ArrowRight className="h-3.5 w-3.5 text-silov-black transition-transform group-hover/btn:translate-x-1 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
