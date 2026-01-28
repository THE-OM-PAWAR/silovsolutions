"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

export function Hero() {
  // Get all 4 categories with their first product
  const categoryCards = productCategories
    .filter((category) => category.products && category.products.length > 0)
    .map((category) => ({
      ...category.products[0],
      categoryTitle: category.title,
      categoryId: category.id,
      categoryDescription: category.description,
    }));

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsHorizontalScroll(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setStartY(e.pageY);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const y = e.pageY;
    const walkX = Math.abs(x - startX);
    const walkY = Math.abs(y - startY);
    
    // Determine scroll direction on first significant movement
    if (!isHorizontalScroll && (walkX > 5 || walkY > 5)) {
      setIsHorizontalScroll(walkX > walkY);
    }
    
    // Only prevent default and scroll horizontally if it's a horizontal scroll
    if (isHorizontalScroll) {
      e.preventDefault();
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsHorizontalScroll(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHorizontalScroll(false);
  };

  const colors = ["bg-silov-lime", "bg-silov-coral", "bg-silov-teal", "bg-silov-purple"];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-silov-cream"
      style={{ minHeight: "100vh", maxHeight: "100vh" }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 sm:py-10 h-full flex flex-col justify-center">
        {/* Hero Content */}
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-10">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-wide text-silov-medium-gray uppercase sm:text-sm">
                ELEVATE YOUR POWER
              </p>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-silov-black sm:text-5xl lg:text-6xl">
                Innovative Power Solutions
              </h1>
            </div>
            <p className="max-w-2xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
              Cutting-edge technology for Power System Emulators, Power Conditioning Units, IoT Infrastructure and EV Ecosystem.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="h-12 rounded-full bg-silov-black px-8 text-sm font-medium text-white transition-all hover:bg-silov-dark-gray sm:h-14 sm:text-base">
                Download Brochure
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        {/* Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 mt-3 snap-x snap-mandatory ${
            isDragging && isHorizontalScroll ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y pinch-zoom",
            overscrollBehaviorX: "contain",
          }}
        >
          {categoryCards.map((category, index) => (
            <div
              key={category?.categoryId ?? index}
              className={`
                flex-shrink-0 snap-center snap-always
                w-[260px] sm:w-[280px] lg:w-[300px] 
                h-[380px] sm:h-[400px] lg:h-[420px] 
                flex flex-col
                group relative overflow-hidden rounded-[28px] 
                ${colors[index % colors.length]} 
                transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
              `}
              style={{
                minHeight: "380px",
                maxHeight: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Content Section - Top */}
              <div className="flex-1 p-6 flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-silov-black uppercase tracking-wide">
                      {category?.categoryTitle
                        ? category.categoryTitle.split(" ")[0]
                        : "Product"}
                    </span>
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md">
                    <ArrowUpRight className="h-4 w-4 text-silov-black" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-silov-black leading-tight pt-1">
                  {category?.categoryTitle || "Untitled Category"}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-silov-dark-gray line-clamp-2">
                  {category?.categoryDescription || "Advanced solution"}
                </p>
              </div>

              {/* Image Section - Bottom */}
              <div 
                className="relative min-h-[120px] max-h-[170px] h-[40%] overflow-hidden rounded-b-[28px] flex items-end"
                style={{
                  background: 'rgba(255,255,255,0.2)'
                }}
              >
                {category?.image ? (
                  <Image
                    src={category.image}
                    alt={category.name || "Silov Product"}
                    fill
                    className="object-cover"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-white/50">
                    <span className="text-silov-black text-sm">No Image</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
