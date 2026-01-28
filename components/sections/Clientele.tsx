"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const clients = [
  {
    name: "IIT Goa",
    src: "/Silovhome/indian_institute_of_technology_goa_logo.svg-Yg2q8zNllgCGkqJN.avif",
    width: 140,
    height: 140,
  },
  {
    name: "IIT Bhubaneswar",
    src: "/Silovhome/indian_institute_of_technology_bhubaneswar_logo.svg-Yleq3Jwlx6I04qGj.avif",
    width: 140,
    height: 140,
  },
  {
    name: "IIT Roorkee",
    src: "/Silovhome/indian_institute_of_technology_roorkee_logo-d957RLX631Trrrya.svg",
    width: 140,
    height: 140,
  },
  {
    name: "NIT Meghalaya",
    src: "/Silovhome/national_institute_of_technology-_meghalaya_logo-YanqrLNn4MHxn3OV.png",
    width: 140,
    height: 140,
  },
  {
    name: "IIT Patna",
    src: "/Silovhome/459265-1600x960347050-iit-patna-phd-admission-2023-application-form-exam-date-eligibility-removebg-preview-A1aB4GjergtbwPzB.avif",
    width: 140,
    height: 140,
  },
  {
    name: "NIT Jaipur",
    src: "/Silovhome/mnit_logo-A85Eoxb5WRion2O7.avif",
    width: 140,
    height: 140,
  },
];

export function Clientele() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused || isDragging) return;

    const scrollSpeed = 1; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset scroll position for infinite loop
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 500);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsPaused(false), 500);
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 500);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 sm:px-8 lg:space-y-12">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
            Key Clientele
          </h2>
          <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Over the past few years, Silov Solutions has dedicated itself to
            fostering strong relationships built on transparency and commitment.
            We continue to maintain this reputation while cultivating even
            stronger partnerships.
          </p>
        </div>

        {/* Infinite Scrolling Bar */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            className={`flex gap-8 overflow-x-hidden py-8 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex flex-shrink-0 flex-col items-center gap-4 transition-all"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-silov-cream p-4 transition-all group-hover:bg-silov-lime/20 group-hover:scale-105 sm:h-28 sm:w-28">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    draggable={false}
                  />
                </div>
                <p className="text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          {/* Instruction Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-silov-medium-gray sm:text-sm">
              Drag to explore • Hover to pause
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

